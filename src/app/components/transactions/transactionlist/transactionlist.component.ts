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
  ngOnChanges() {
    this.trs.unsubscribe(this.key);
    let current_month = moment(this.month).format('YYYY-MM');
    let next_month = moment(this.month).add(1, 'M').format('YYYY-MM');
    console.log('current transactions month: ', current_month);
    this.trs.subscribe(this.key, current_month, next_month, (data) => {
      let transactions = [];
      for (let transaction in data) {
        transactions.push(data[transaction]);
      }
      this.transactions = transactions;
    });
  }
  ngOnDestroy() {
    this.trs.unsubscribe(this.key);
  }
}
