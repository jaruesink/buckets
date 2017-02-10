import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FacebookService, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk';
import { HelpersService } from './helpers.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  possibleLogin: boolean;
  constructor(
    private fb: FacebookService,
    private http: Http,
    public helpers: HelpersService,
    public user: UserService
  ) {}

  checkLogin() {
    return this.fb.getLoginStatus().then((response: any) => {
        console.log('response from facebook login status check: ', response);
        const accessToken = response.authResponse ? response.authResponse.accessToken : false;
        if (accessToken && !this.user.me) {
          return this.sendAccessToken(response.authResponse.accessToken)
          .then((http_response) => {
            return this.checkResponseAndSetUser(http_response);
          })
          .catch((error) => {
            this.handleHttpError(error);
          });
        } else {
          return accessToken;
        }
      },
      (error) => {
        console.error('error checking login status', error);
        this.helpers.notify('connection error', 'retry', this.login.bind(this));
      });
  }

  login() {
    return this.checkLogin().then((accessToken) => {
      if (accessToken) {
        return this.sendAccessToken(accessToken)
          .then((http_response) => {
            return this.checkResponseAndSetUser(http_response);
          })
          .catch((error) => {
            this.handleHttpError(error);
          });
      } else {
        return this.fb.login().then((response: FacebookLoginResponse) => {
          console.log('response from facebook login: ', response);
          return this.sendAccessToken(response.authResponse.accessToken)
            .then((http_response) => {
              return this.checkResponseAndSetUser(http_response);
            })
            .catch((error) => {
              this.handleHttpError(error);
            });
        },
        (error) => {
          console.error('error logging into facebook', error);
          this.helpers.notify('connection error', 'retry', this.login.bind(this));
        });
      }

    })
  }

  sendAccessToken(access_token) {
    this.possibleLogin = true;
    const url = `/api/login`;
    return this.http.post(url,
      JSON.stringify({access_token}),
      {headers: this.headers}
    ).toPromise();
  }

  checkResponseAndSetUser(http_response) {
    console.log('checking http response: ', http_response);
    if (!http_response) throw new Error('empty response');
    const data = JSON.parse(http_response['_body'])
    this.user.setUser(data);
    return data;
  }

  handleHttpError(error) {
    this.possibleLogin = false;
    console.log('handling http response error: ', error);
    this.helpers.notify('connection error', 'retry', this.login.bind(this));
    throw new Error('error with response from server');
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
