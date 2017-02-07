import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { FacebookService, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk';
import { UserService } from '../../services/';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private fb: FacebookService,
    private http: Http,
    private router: Router,
    public user: UserService
  ) { }

  ngOnInit() { }

  login() {
    this.fb.getLoginStatus().then((response) => {
      if (response.authResponse) {
        const access_token = response.authResponse.accessToken;
        this.sendLogin(access_token)
          .then(response => this.onLoginSuccess(response))
          .catch(error => console.error('error logging in', error));
      } else {
        this.fb.login().then(
          (response: FacebookLoginResponse) => {
            const access_token = response.authResponse.accessToken;
            console.log('login response: ', response);
            console.log('access_token: ', access_token)
            this.sendLogin(access_token)
              .then(response => this.onLoginSuccess(response))
              .catch(error => console.error('error logging in', error));
          },
          (error) => console.error('error logging into facebook', error)
        );
      }
    },
    (error) => console.error('error checking login status while logging in', error));
  }

  checkStatus() {
    this.fb.getLoginStatus().then(
      (response: FacebookLoginStatus) => console.log('response from checking login status', response),
      (error) => console.error('error checking login status', error)
    );
  }

  sendLogin(access_token) {
    const url = `http://localhost:3000/api/login`;
    return this.http.post(url,
      JSON.stringify({access_token}),
      {headers: this.headers}
    ).toPromise();
  }

  onLoginSuccess(response) {
    const user = JSON.parse(response._body)
    this.user.setUser(user);
    this.router.navigate(['/']);
  }

}
