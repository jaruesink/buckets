import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() total = new EventEmitter(true);
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
  formatDate(date) {
    return moment(date, 'YYYY-MM-DD').format('MM/DD/YY');
  }
  ngOnChanges() {
    this.trs.unsubscribe(this.key);
    let current_month, next_month;
    if (this.month) {
      current_month = moment(this.month).format('YYYY-MM');
      next_month = moment(this.month).add(1, 'M').format('YYYY-MM');
      console.log('current transactions month: ', current_month);
    } else {
      current_month = null;
      next_month = null;
    }
    this.trs.subscribe(this.key, current_month, next_month, (data) => {
      let transactions = [];
      let total = 0;
      for (let transaction in data) {
        data[transaction].editing = false;
        data[transaction].$bucketkey = this.key;
        data[transaction].$key = transaction;
        data[transaction].date_formatted = this.formatDate(data[transaction].date);
        total += data[transaction].amount;
        transactions.push(data[transaction]);
      }
      this.transactions = transactions;
      this.total.emit(total);
      console.log('Transaction Array: ', this.transactions);
    });
  }
  ngOnDestroy() {
    this.trs.unsubscribe(this.key);
  }
}
