import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';

@Component({
  selector: 'addtransaction',
  templateUrl: './addtransaction.html',
  styleUrls: ['./addtransaction.scss']
})
export class AddtransactionComponent {
  @Input() key;
  constructor(public trs: TransactionsService) {}
  addTransaction(form, firstInput) {
    firstInput.focus();
    this.trs.addTransaction(this.key, form);
    form.reset();
  }
}
