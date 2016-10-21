import { Component, Input } from '@angular/core';
import { BucketService } from '../../../services';

@Component({
  selector: 'bucketlist',
  template: `
  <loading *ngIf="!bks.buckets"></loading>
  <div class="container m-t-2 space-around">
    <div *ngFor="let bucket of bks.buckets" class="card">
      {{bucket.name}}
    </div>
  </div>
  `,
  styleUrls: ['./bucketlist.scss']
})
export class BucketlistComponent {
  constructor(public bks: BucketService) {
    bks.subscribe();
  }
}
