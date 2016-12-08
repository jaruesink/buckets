import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './firebase.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  isLoadingAuth: boolean = true;
  constructor(public fbs: FirebaseService, public rtr: Router, public user: UserService) {
    fbs.authSubscribe(data => {
      (data) ? this.processLogin(data) : this.processLogout();
      this.isLoadingAuth = false;
    });
  }
  processLogin(data) {
    this.isLoggedIn = true;
    this.user.saveUser(data);
    if ( this.rtr.url === '/login' ) {
      this.rtr.navigate(['/']);
    }
  }
  processLogout() {
    this.isLoggedIn = false;
    this.rtr.navigate(['/login']);
  }
  login() {
    this.fbs.authLogin();
  }
  logout() {
    this.processLogout();
    this.fbs.authLogout();
  }
}
