import {Component, EventEmitter, OnInit} from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './auth.config';
import {Router} from '@angular/router';
import {TodoService} from './todos/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  show = false;


  constructor(private oauthService: OAuthService, private todoService: TodoService, private router: Router) {

    this.todoService.showHeader.subscribe(flag => {
      this.show = flag;
    })
  }

  async logout() {
      await this.oauthService.revokeTokenAndLogout();
      this.todoService.showHeader.emit(false);
      await this.router.navigateByUrl('/');

  }


  async ngOnInit() {
      this.oauthService.configure(authCodeFlowConfig);
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      console.log(this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken());

    if(this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken()) {
      this.show = true;
    }


  }

}
