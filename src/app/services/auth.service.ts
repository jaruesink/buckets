import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FacebookService, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk';
import { HelpersService } from './helpers.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(
    private fb: FacebookService,
    private http: Http,
    public helpers: HelpersService,
    public user: UserService
  ) {}

  checkLogin() {
    return this.fb.getLoginStatus().then(
      (response: FacebookLoginStatus) => {
        console.log('response from facebook login status check: ', response);
        const accessToken = response.authResponse ? response.authResponse.accessToken : false;
        if (accessToken && !this.user.me) {
          return this.sendAccessToken(response.authResponse.accessToken)
          .then((http_response) => {
            const data = JSON.parse(http_response['_body'])
            this.user.setUser(data);
            return data;
          });
        } else {
          return accessToken;
        }
      },
      (error) => console.error('error checking login status', error)
    );
  }

  login() {
    return this.checkLogin().then((accessToken) => {
      return this.fb.login().then((response: FacebookLoginResponse) => {
        console.log('response from facebook login: ', response);
        return this.sendAccessToken(response.authResponse.accessToken)
        .then((http_response) => {
          const data = JSON.parse(http_response['_body'])
          this.user.setUser(data);
          return data;
        });
      },
      (error) => console.error('error logging into facebook', error)
      );
    })
  }

  sendAccessToken(access_token) {
    const url = `/api/login`;
    return this.http.post(url,
      JSON.stringify({access_token}),
      {headers: this.headers}
    ).toPromise();
  }

  logout() {
    return this.fb.logout().then(
      (response) => {
        console.log('response from logging out', response);
        return response;
      },
      (error) => console.error('error logging out of facebook', error)
    )
  }
}
