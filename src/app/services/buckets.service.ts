import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable()
export class BucketService {
  buckets: Array<any>;
  constructor(public fbs: FirebaseService) {}
  subscribe() {
    this.fbs.bucketsSubscribe(data => {
      this.buckets = data;
    });
  }
}
