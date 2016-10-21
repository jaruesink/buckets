import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  isLoadingAuth: boolean = true;
  constructor(public fbs: FirebaseService, public rtr: Router) {
    fbs.authSubscribe(data => {
      console.log('auth subscribe: ', data);
      (data) ? this.processLogin() : this.processLogout();
      this.isLoadingAuth = false;
    });
  }
  processLogin() {
    this.isLoggedIn = true;
    this.rtr.navigate(['/']);
  }
  processLogout() {
    this.isLoggedIn = false;
    this.rtr.navigate(['/login']);
  }
  login() {
    this.fbs.authLogin();
  }
  logout() {
    this.fbs.authLogout();
  }
}
