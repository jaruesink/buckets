import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';
import * as moment from 'moment';

@Component({
  selector: 'transactionlist',
  templateUrl: './transactionlist.html',
  styleUrls: ['./transactionlist.scss']
})
export class TransactionlistComponent {
  @Input() key;
  @Input() month;
  sort: string = 'date';
  transactions: Array<any> = [];
  constructor(public trs: TransactionsService) {}
  edit(editing_transaction) {
    for (let transaction of this.transactions) {
      if (editing_transaction === transaction) {
        transaction.editing = true;
      } else {
        transaction.editing = false;
      }
    }
  }
  closeEdit($event, editing_transaction) {
    $event.stopPropagation();
    editing_transaction.editing = false;
  }
  ngOnChanges() {
    this.trs.unsubscribe(this.key);
    let current_month = moment(this.month).format('YYYY-MM');
    let next_month = moment(this.month).add(1, 'M').format('YYYY-MM');
    console.log('current transactions month: ', current_month);
    this.trs.subscribe(this.key, current_month, next_month, (data) => {
      let transactions = [];
      for (let transaction in data) {
        data[transaction].editing = false;
        data[transaction].$key = transaction;
        transactions.push(data[transaction]);
      }
      this.transactions = transactions;
      console.log('Transaction Array: ', this.transactions);
    });
  }
  ngOnDestroy() {
    this.trs.unsubscribe(this.key);
  }
}
