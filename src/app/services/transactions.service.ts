import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import * as moment from 'moment';

// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable()
export class TransactionsService {
  constructor(public fbs: FirebaseService) {}
  subscribe(key, begin, end, reader) {
    this.fbs.transactionsSubscribe(key, begin, end, data => {
      reader(data);
    });
  }
  unsubscribe(key) {
    this.fbs.transactionsUnsubscribe(key);
  }
  addTransaction(key, form) {
    this.fbs.addTransaction(key, form.value);
  }
  saveTransaction(bucketkey, key, form) {
    this.fbs.saveTransaction(bucketkey, key, form.value);
  }
}
