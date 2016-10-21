import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  me: Object;
  constructor(public fbs: FirebaseService) {}
  saveUser({displayName:name, email, photoURL:photo}) {
    this.me = {name, email, photo};
  }
}
