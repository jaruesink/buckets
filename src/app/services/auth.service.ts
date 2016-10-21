import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  isLoadingAuth: boolean = true;
  constructor(public af: AngularFire, public router: Router) {
    af.auth.subscribe(data => {
      console.log('auth subscribe: ', data);
      (data) ? this.processLogin() : this.processLogout();
      this.isLoadingAuth = false;
    });
  }
  processLogin() {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }
  processLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  facebookLogin() {
    console.log('logging in with facebook');
    this.af.auth.login().then(() => {
      console.log('you are logging in');
    });
  }
  logout() {
    console.log('logging out');
    this.af.auth.logout();
  }
}
