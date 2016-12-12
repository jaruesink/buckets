import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  me: any;
  constructor(public fbs: FirebaseService) {}
  saveUser(data) {
    let {uid, displayName:name, email, photoURL:photo} = data.auth;
    if (data.facebook) {
      let {uid:fbid} = data.facebook;
      this.me = {uid, name, email, photo, fbid};
    } else {
      this.me = {uid, name, email, photo};
    }

    console.log('user data saved: ', this.me);
    this.fbs.saveUser(this.me);
  }
  getUserInfo(reader) {
    this.fbs.getUserOnce(data => {
      reader(data);
    });
  }
  subscribe(reader) {
    this.fbs.userSubscribe(data => {
      reader(data);
    });
  }
}
