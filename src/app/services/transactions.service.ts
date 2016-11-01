import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable()
export class TransactionsService {
  constructor(public fbs: FirebaseService) {}
  subscribe(key, reader) {
    this.fbs.transactionsSubscribe(key, data => {
      console.log('transaction service subscribe: ', data);
      reader(data);
    });
  }
  addTransaction(key, form) {
    this.fbs.addTransaction(key, form.value);
  }
}
