import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  me: any;
  constructor(public fbs: FirebaseService) {}
  saveUser(data) {
    let {uid, displayName:name, email, photoURL:photo} = data.auth;
    let {uid:fbid} = data.facebook;
    this.me = {uid, name, email, photo, fbid};
    console.log('user data saved: ', this.me);
    this.fbs.saveUser(uid, this.me);
  }
}
