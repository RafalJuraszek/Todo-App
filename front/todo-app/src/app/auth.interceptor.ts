import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oauthService: OAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {

    const idToken = this.oauthService.getIdToken();

    if ( idToken && request.url.includes('/api')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + idToken
        }
      });
    }
    return next.handle(request).toPromise();
  }
}
