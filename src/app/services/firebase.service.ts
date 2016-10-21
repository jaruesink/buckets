import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

//Firebase
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

@Injectable()
export class FirebaseService {
  constructor(public af: AngularFire) {
    const BUCKETSREF = firebase.initializeApp(firebaseConfig).database().ref('/buckets');
    BUCKETSREF.once('value').then(snapshot => console.log('fb buckets ref data: ', snapshot.val()));
  }
  authSubscribe(reader) {
    this.af.auth.subscribe(data => {
      reader(data);
    });
  }
  authLogin() {
    console.log('logging in with facebook');
    this.af.auth.login().then(() => {
      console.log('you are logging in');
    });
  }
  authLogout() {
    console.log('logging out');
    this.af.auth.logout();
  }
}
