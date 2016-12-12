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
  constructor(public fbs: FirebaseService, public utils: UtilityService) {
    this.snapshot$ = new Subject();
    this.subscribe(data => {
      console.log('buckets data: ', data);
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

  }
  subscribe(reader) {
    this.fbs.bucketsSubscribe(data => {
      this.subscribeEditorOfBuckets(bucket_key_list => {
        if (bucket_key_list) {
          let requests = bucket_key_list.map((bucket_key) => {
            return new Promise((resolve) => {
              this.fbs.getBucketByKey(bucket_key).then(bucket_data => {
                console.log('getting bucket by key: ', bucket_data);
                data[bucket_key] = bucket_data;
                resolve();
              }).catch(error => {
                console.log('error getting bucket by key: ', error);
              });
            });
          });
          Promise.all(requests).then(() => {
            console.log('requests have finished: ', data);
            reader(data);
          });
        } else {
          reader(data);
        }
      });

    });
  }
  subscribeEditorOfBuckets(reader) {
    this.fbs.editorOfBucketsSubscribe(data => {
      reader(data);
    })
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
    if (!user.invitedTo) { user.invitedTo = [] };
    user.invitedTo.push({key: bucket.$key, invitedBy});
    this.fbs.saveUser(user);
    this.updateBucket(bucket);
  }
  cancelInviteToBucket(bucket, user) {
    console.log('user canceling invite: ', user);
    let index = bucket.invited.indexOf(user.fbid);
    bucket.invited.splice(index, 1);
    if (user.invitedTo) {
      user.invitedTo.forEach((invite, index) => {
        if (invite.key === bucket.$key) {
          user.invitedTo.splice(index, 1);
        }
      });
    }
    if (bucket.invitedBy) { delete bucket.invitedBy }
    this.fbs.saveUser(user);
    this.updateBucket(bucket);
  }
  acceptInviteToBucket(bucket, user) {
    console.log('user accepting invite: ', user);
    if (!bucket.editors) { bucket.editors = [] };
    if (bucket.editors.indexOf(user.uid) === -1) {
      bucket.editors.push(user.uid);
    }
    if (!user.editorOf) { user.editorOf = [] };
    if (user.editorOf.indexOf(bucket.$key) === -1) {
      user.editorOf.push(bucket.$key);
    }
    this.cancelInviteToBucket(bucket, user);
  }
  removeEditorFromBucket(bucket, editor) {
    console.log(`removing ${editor.name} from ${bucket.name}`)
    if (bucket.editors && bucket.editors.indexOf(editor.uid) > -1) {
      let index = bucket.editors.indexOf(editor.uid);
      bucket.editors.splice(index, 1);
    }
    if (editor.editorOf && editor.editorOf.indexOf(bucket.$key) > -1) {
      let index = editor.editorOf.indexOf(bucket.$key);
      editor.editorOf.splice(index, 1);
    }
    this.fbs.saveUser(editor);
    this.updateBucket(bucket);
  }
  deleteInviteToBucket(bucket, user) {
    this.cancelInviteToBucket(bucket, user);
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
