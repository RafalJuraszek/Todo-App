import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {

  issuer: 'https://accounts.google.com',


  redirectUri: window.location.origin,
  clientId: '663539248848-kufor06fdfh15tn20i4su6u61h1lma1c.apps.googleusercontent.com',

  dummyClientSecret: 'RCvyBlJOvSvP-bCQnC-nKh_0',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email',
  showDebugInformation: true
};
