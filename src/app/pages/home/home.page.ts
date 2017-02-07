import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk';

import { UserService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(
    private fb: FacebookService,
    private router: Router,
    public user: UserService
  ) { }

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus() {
    this.fb.getLoginStatus().then(
      (response: FacebookLoginStatus) => {
        if (!response.authResponse) { return this.router.navigate(['/login']) }
      },
      (error) => console.error('error checking login status', error)
    );
  }

  logout() {
    this.fb.logout().then(
      (response) => {
        console.log('response from logging out', response)
        this.router.navigate(['/login']);
      },
      (error) => console.error('error logging out of facebook', error)
    )
  }

}
