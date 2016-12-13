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
    console.log('process login data: ', data)
    this.isLoggedIn = true;
    let user:any = {};
    if (data.facebook.uid) {
      user.uid = data.auth.uid;
      user.name = data.facebook.displayName;
      user.email = data.facebook.email;
      user.photo = data.facebook.photoURL;
      user.fbid = data.facebook.uid;
      this.user.saveUser(user);
    } else {
      firebase.auth().getRedirectResult().then((result) => {
        console.log('process redirect result data: ', result);
        user.uid = result.user.uid;
        user.name = result.user.displayName;
        user.email = result.user.email;
        user.photo = result.user.photoURL;
        user.fbid = result.user.providerData[0].uid;
        this.user.saveUser(user);
      }).catch((error) => {
        console.log('error getting redirect result from facebook login: ', error)
      });
    }
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
