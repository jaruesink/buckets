import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';
import { UtilityService } from './utility.service';
import { UserService } from './user.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BucketService {
  snapshot: Object = {};
  buckets: Array<any> = [];
  snapshot$: Subject<any>;
  bucketsLoaded: boolean = false;
  invitesLoaded: boolean = false;
  invites: Array<any>;
  constructor(public fbs: FirebaseService, public utils: UtilityService) {
    this.snapshot$ = new Subject();
    this.subscribe(data => {
      if ( data ) {
        let buckets = [];
        let snapshot = {};
        for (let bucket in data) {
          let link = data[bucket].link;
          data[bucket].$key = bucket;
          snapshot[link] = data[bucket];
          buckets.push(data[bucket]);
        }
        this.buckets = buckets;
        this.snapshot = snapshot;
        this.snapshot$.next(this.snapshot)
        console.log('Bucket Array: ', this.buckets);
        (this.utils.tutorial) ? this.utils.tutorial = true : null;
      } else {
        this.buckets = null;
        this.snapshot = null;
        this.utils.tutorial = true;
      }
      this.bucketsLoaded = true;
    });

    this.subscribeToInvited(invites => {
      this.invites = [];
      if (invites) {
        for (let prop in invites) {
          let invite = invites[prop];
          invite.$key = prop;
          this.subscribeByKey(invite.bucketKey, bucket_data => {
            console.log('bucket data: ', bucket_data);
            invite.bucket = bucket_data;
            this.fbs.getUserByUID(invite.invitedByUID).then(user => {
              invite.invitedBy = user;
              this.invites.forEach((inv, index) => {
                console.log('inv', inv);
                if (invite.$key === inv.$key) {
                  this.invites.splice(index, 1);
                }
              });
              this.invites.push(invite);
              this.invitesLoaded = true;
            }).catch(error => {
              console.log('error getting user by UID: ', error);
            });
          })
        }
      } else {
        this.invitesLoaded = true;
      }
      console.log('user is invited to: ', this.invites);
    });

  }
  subscribe(reader) {
    this.fbs.bucketsSubscribe(data => {
      reader(data);
    });
  }
  subscribeByKey(key, reader) {
    this.fbs.bucketsSubscribeByKey(key, data => {
      reader(data);
    });
  }
  addBucket(form) {
    form.value.name = form.value.name.trim();
    this.checkBucketName(form.value.name)
      .then((new_link) => {
        form.value.link = new_link;
        this.fbs.addBucket(form.value);
        console.log('adding bucket:', form.value);
        form.reset();
      }, () => {
        alert('please choose a unique name');
      });
  }
  checkBucketName(name, key=null) {
    let new_link = name.replace(/[^a-zA-Z\d-]+/g, '-').toLowerCase();
    return new Promise( (resolve, reject) => {
      if ( this.buckets ) {
        for ( let bucket of this.buckets ) {
          if ( new_link === bucket.link && bucket.$key !== key ) {
            reject();
          }
        }
      }
      resolve(new_link);
    });
  }
  inviteUserToBucket(bucket, user, invitedBy) {
    this.fbs.inviteUserToBucket(bucket.$key, user.uid, user.fbid, invitedBy.uid);
    console.log('inviting user to bucket: ', bucket, user, invitedBy)
  }
  subscribeToInvited(reader) {
    this.fbs.invitesSubscribe(reader);
  };
  subscribeToInvitedBy(reader) {
    this.fbs.invitedBySubscribe(reader);
  };
  cancelInviteToBucket(fbid, key) {
    console.log('user canceling invite: ', fbid, key);
    this.fbs.cancelInviteToBucket(fbid, key);
  }
  acceptInviteToBucket(bucket, user) {
    console.log('user accepting invite: ', bucket, user);
  }
  removeEditorFromBucket(bucket, editor) {
    console.log(`removing ${editor.name} from ${bucket.name}`);
  }
  deleteInviteToBucket(bucket, user) {
    console.log('deleting invite to bucket: ', bucket, user);
  }
  updateBucket(bucket) {
    this.fbs.updateBucket(bucket);
  }
  saveBucket(form, firstInput) {
    return new Promise( (resolve, reject) => {
      this.checkBucketName(form.value.name, form.value.key)
        .then((new_link) => {
          form.value.link = new_link;
          this.fbs.saveBucket(form.value);
          resolve();
        }, () => {
          alert('please choose a unique name');
          firstInput.focus();
          reject();
        });
    });
  }
  deleteBucket(bucket) {
    console.log('deleting bucket:', bucket);
    this.fbs.deleteBucket(bucket.$key);
  }
  getBucketByKey(key) {
    return this.fbs.getBucketByKey(key);
  }
}
