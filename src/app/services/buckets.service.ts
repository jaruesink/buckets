import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';
import { HackService } from './hack.service';

@Injectable()
export class BucketService {
  buckets: Array<any> = [];
  bucketsLoaded: boolean = false;
  constructor(public fbs: FirebaseService, public hack: HackService) {
    this.subscribe((bucketlist) => {
      this.buckets = bucketlist;
      this.bucketsLoaded = true;
    });
  }
  subscribe(reader) {
    this.fbs.bucketsSubscribe(data => {
      if ( data ) {
        let bucketlist = [];
        for (let bucket in data) {
          data[bucket].$key = bucket;
          bucketlist.push(data[bucket]);
        }
        reader(bucketlist);
      } else {
        reader(null);
      }

    });
  }
  addBucket(form, firstInput) {
    this.checkBucketName(form.value.name)
      .then((new_link) => {
        form.value.link = new_link;
        this.fbs.addBucket(form.value);
        console.log('adding bucket:', form.value);
        form.reset();
      }, () => {
        alert('please choose a unique name');
      });
    firstInput.focus();
  }
  checkBucketName(name) {
    let new_link = name.replace(/\s+/g, '-').toLowerCase();
    return new Promise( (resolve, reject) => {
      if ( this.buckets ) {
        for ( let bucket of this.buckets ) {
          if ( new_link === bucket.link ) {
            reject();
          }
        }
      }
      resolve(new_link);
    });
  }
  saveBucket(form, firstInput) {
    return new Promise( (resolve, reject) => {
      this.checkBucketName(form.value.name)
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
