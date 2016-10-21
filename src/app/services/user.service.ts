import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  me: any;
  constructor(public fbs: FirebaseService) {}
  saveUser({uid, displayName:name, email, photoURL:photo}) {
    this.me = {uid, name, email, photo};
    console.log('user data saved: ', this.me);
  }
}
