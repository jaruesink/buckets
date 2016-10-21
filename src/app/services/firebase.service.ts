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
}
