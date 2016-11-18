import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';
import { UtilityService } from './utility.service';

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
    this.subscribe((data) => {
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
}
