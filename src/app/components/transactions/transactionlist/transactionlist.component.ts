import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';

@Component({
  selector: 'transactionlist',
  template: `
    <ul>
      <li *ngFor="let transaction of transactions">
        {{transaction.date}}, \${{transaction.amount}}, {{transaction.description}}
      </li>
    </ul>
  `,
  styleUrls: ['./transactionlist.scss']
})
export class TransactionlistComponent {
  @Input() key;
  transactions: Array<any>;
  constructor(public trs: TransactionsService) {}
  ngOnInit() {
    console.log('this bucket key', this.key);
    this.trs.subscribe(this.key, (data) => {
      this.transactions = new Array;
      for (let transaction in data) {
        this.transactions.push(data[transaction]);
      }
    });
  }
}
