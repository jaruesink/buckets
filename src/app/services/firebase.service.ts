import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

//Firebase
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

//Services
import { UserService } from './user.service';

const FIRE = firebase.initializeApp(firebaseConfig)
const FIREAUTH = FIRE.auth();
const FIREDB = FIRE.database();
const BUCKETSREF = FIREDB.ref('/buckets');

@Injectable()
export class FirebaseService {
  uid: string;
  constructor(public af: AngularFire) {}
  
  // AUTH DATA
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
  
  // BUCKETS DATA
  bucketsSubscribe(reader) {
    let buckets = [];
    this.authSubscribe(data => {
      this.uid = data.auth.uid;
      let ref = BUCKETSREF.orderByChild('owner').equalTo(this.uid);
      ref.on('child_added', snapshot => {
        buckets.push(snapshot.val());
      });
      reader(buckets);
    });
  }
  addBucket(data) {
    data.owner = this.uid;
    BUCKETSREF.push(data);
  }
  
}
