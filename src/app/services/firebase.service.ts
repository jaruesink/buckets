import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

//Firebase
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase';

//Services
import { UserService } from './user.service';

@Injectable()
export class FirebaseService {
  uid: string;
  FIRE: any;
  FIREAUTH: any;
  FIREDB: any;
  BUCKETSREF: any;
  constructor(public af: AngularFire) {
    this.FIRE = firebase.initializeApp(firebaseConfig)
    this.FIREAUTH = this.FIRE.auth();
    this.FIREDB = this.FIRE.database();
    this.BUCKETSREF = this.FIREDB.ref('/buckets');
  }

  // AUTH DATA
  authSubscribe(reader) {
    this.af.auth.subscribe(data => {
      if (data && data.uid) {this.uid = data.uid;}
      console.log('authentication subscribe: ', data);
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
    console.log('TODO: figure out a way to not need this subscribe');
    this.authSubscribe(data => {
      let ref = this.BUCKETSREF.orderByChild('owner').equalTo(this.uid);
      ref.once('value', snapshot => {
        if (snapshot.val() === null) {
          reader(null);
        }
      }).then(() => {
        ref.on('value', snapshot => {
          console.log('buckets subscribe: ', snapshot.val());
          reader(snapshot.val());
        });
      });
    });
  }
  addBucket(data) {
    data.owner = this.uid;
    this.BUCKETSREF.push(data);
  }
  saveBucket({key, link, name, budget}) {
    this.BUCKETSREF.child(key).update({link, name, budget});
  }
  deleteBucket(key) {
    this.BUCKETSREF.child(key).remove();
  }

  // TRANSACTION DATA
  transactionsSubscribe(key, begin, end, reader) {
    let ref;
    if (begin && end) {
      ref = this.BUCKETSREF.child(`${key}/transactions`).orderByChild('date').startAt(begin).endAt(end);
    } else {
      ref = this.BUCKETSREF.child(`${key}/transactions`).orderByChild('date');
    }

    ref.once('value', snapshot => {
      if (snapshot.val() === null) {
        reader(null);
      }
    }).then(() => {
      ref.on('value', snapshot => {
        console.log('transactions subscribe: ', snapshot.val());
        reader(snapshot.val());
      });
    });
  }
  transactionsUnsubscribe(key) {
    let ref = this.BUCKETSREF.child(`${key}/transactions`);
    console.log('transactions unsubscribe:', key);
    ref.off();
  }
  addTransaction(key, data) {
    this.BUCKETSREF.child(`${key}/transactions`).push(data);
  }
  saveTransaction(bucketkey, key, data) {
    this.BUCKETSREF.child(`${bucketkey}/transactions/${key}`).update(data);
  }
  deleteTransaction(bucketkey, key) {
    this.BUCKETSREF.child(`${bucketkey}/transactions/${key}`).remove();
  }
}
