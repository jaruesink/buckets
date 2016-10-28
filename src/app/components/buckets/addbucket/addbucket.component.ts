import { Component, Input } from '@angular/core';
import { BucketService } from '../../../services';

@Component({
  selector: 'addbucket',
  template: `
    <div class="card mt-1">
      <div class="card-block">
        <form (ngSubmit)="bks.addBucket(addBucketForm, firstInput)" #addBucketForm="ngForm">
          <div class="form-group">
            <label for="name">Bucket Name</label>
            <input #firstInput id="name" type="text" class="form-control" name="name" [(ngModel)]="name" autocomplete="off" required>
          </div>
          <div class="form-group">
            <label for="budget">Monthly Budget</label>
            <input id="budget" type="number" class="form-control" name="budget" [(ngModel)]="budget" autocomplete="off" required>
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
