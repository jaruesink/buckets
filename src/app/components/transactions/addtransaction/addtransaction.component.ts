import { Component, Input } from '@angular/core';
import { TransactionsService } from '../../../services';

@Component({
  selector: 'addtransaction',
  template: `
    <form (ngSubmit)="addTransaction(addTransactionForm, firstInput)" #addTransactionForm="ngForm">
      <div class="form-group date mt-1">
        <label for="date">Date</label>
        <input #firstInput type="date" class="form-control" id="date" name="date" [(ngModel)]="date" required>
      </div>
      <div class="form-group amount mt-1">
        <label for="amount">Amount</label>
        <div class="input-group amount">
          <span class="input-group-addon">$</span>
          <input type="number" class="form-control" id="amount" name="amount" [(ngModel)]="amount" placeholder="#.##" step=.01 required>
        </div>
      </div>
      <div class="form-group description mt-1">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" name="description" [(ngModel)]="description" placeholder="What is this transaction for?" required>
      </div>
      <button type="submit" class="btn btn-success mt-1">Add <i class="fa fa-plus" aria-hidden="true"></i></button>
    </form>
  `,
  styleUrls: ['./addtransaction.scss']
})
export class AddtransactionComponent {
  @Input() key;
  constructor(public trs: TransactionsService) {}
  addTransaction(form, firstInput) {
    firstInput.focus();
    console.log(form);
    this.trs.addTransaction(this.key, form);
    form.reset();
  }
}
