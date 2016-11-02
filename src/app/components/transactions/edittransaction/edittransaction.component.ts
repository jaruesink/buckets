import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';
// import * as moment from 'moment';

@Component({
  selector: 'edittransaction',
  templateUrl: './edittransaction.html',
  styleUrls: ['./edittransaction.scss']
})
export class EditTransactionComponent {
  @Input() transaction;
  date: Date;
  amount: number;
  description: string;
  constructor(public trs: TransactionsService) {
    
  }
  ngOnInit() {
    this.date = this.transaction.date;
    this.amount = this.transaction.amount;
    this.description = this.transaction.description;
  }
  saveTransaction(form) {
    this.trs.saveTransaction(this.transaction.$bucketkey, this.transaction.$key, form);
    this.transaction.editing = false;
  }
}
