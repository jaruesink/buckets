import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';
import * as moment from 'moment';

@Component({
  selector: 'edittransaction',
  templateUrl: './edittransaction.html',
  styleUrls: ['./edittransaction.scss']
})
export class EditTransactionComponent {
  @Input() transaction;
  constructor(public trs: TransactionsService) {}
}
