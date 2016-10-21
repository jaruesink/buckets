import { Component, Input } from '@angular/core';
import { BucketService } from '../../../services';

@Component({
  selector: 'addbucket',
  template: `
    <div class="card">
      <div class="card-block">
        <form (ngSubmit)="bks.addBucket(addBucketForm)" #addBucketForm="ngForm">
        <div class="form-group">
          <label for="name">Bucket Name</label>
          <input id="name" type="text" class="form-control" name="name" [(ngModel)]="name" required>
        </div>
        <div class="form-group">
          <label for="budget">Monthly Budget</label>
          <input id="budget" type="number" class="form-control" name="budget" [(ngModel)]="budget" required>
        </div>
          <button type="submit" class="btn btn-success btn-block">Add Bucket</button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./addbucket.scss']
})
export class AddbucketComponent {
  constructor(public bks: BucketService) {}
}
