import { Component, Input } from '@angular/core';

@Component({
  selector: 'addtransaction',
  template: `
    <form #addTransactionForm (ngSubmit)="addTransactionForm">
      <div class="form-group date mt-1">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date">
      </div>
      <div class="form-group amount mt-1">
        <label for="amount">Amount</label>
        <div class="input-group amount">
          <span class="input-group-addon">$</span>
          <input type="number" class="form-control" id="amount" placeholder="#.##">
        </div>
      </div>
      <div class="form-group description mt-1">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="What is this transaction for?">
      </div>
      <button type="submit" class="btn btn-primary mt-1">Add</button>
    </form>
  `,
  styleUrls: ['./addtransaction.scss']
})
export class AddtransactionComponent {
  // @Input() key;
  constructor() {}
}
