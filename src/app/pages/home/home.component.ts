import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {FacebookService, FacebookLoginResponse, FacebookLoginStatus} from 'ng2-facebook-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private fb: FacebookService, private http: Http) { }

  ngOnInit() {
  }

  login() {
    this.fb.getLoginStatus().then((response) => {
      const access_token = response.authResponse.accessToken;
      if (response) {
        this.sendLogin(access_token)
          .then(response => console.log('response from logging in', response))
          .catch(error => console.error('error logging in', error));
      } else {
        this.fb.login().then(
          (response: FacebookLoginResponse) => {
            console.log('login response: ', response);
            console.log('access_token: ', access_token)
            this.sendLogin(access_token)
              .then(response => console.log('response from logging in', response))
              .catch(error => console.error('error logging in', error));
          },
          (error) => console.error('error logging into facebook', error)
        );
      }
    },
    (error) => console.error('error checking login status while logging in', error));
  }

  logout() {
    this.fb.logout().then(
      (response) => console.log('response from logging out', response),
      (error) => console.error('error logging out of facebook', error)
    )
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

}
