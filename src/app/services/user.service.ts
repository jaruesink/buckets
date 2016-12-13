import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  me: any;
  invitedTo: any;
  constructor(public fbs: FirebaseService) {}
  saveUser({uid, name, email, photo, fbid}) {
    this.me = {uid, name, email, photo, fbid};
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
      this.me = data;
      reader(data);
    });
  }
}
