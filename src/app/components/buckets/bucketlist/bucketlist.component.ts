import { Component, Input } from '@angular/core';
import { BucketService } from '../../../services';

@Component({
  selector: 'bucketlist',
  template: `
  <loading *ngIf="(bks.buckets?.length < 1)"></loading>
  <div [hidden]="(bks.buckets?.length < 1)" class="container m-t-2">
    <ul class="list-unstyled space-between">
      <li *ngFor="let bucket of bks.buckets">
        <bucketcard [bucket]="bucket"></bucketcard>
      </li>
      <addbucket></addbucket>
      <li class="fake-li" aria-hidden="true"></li>
      <li class="fake-li" aria-hidden="true"></li>
      <li class="fake-li" aria-hidden="true"></li>
      <li class="fake-li" aria-hidden="true"></li>
    </ul>
  </div>
  `,
  styleUrls: ['./bucketlist.scss']
})
export class BucketlistComponent {
  constructor(public bks: BucketService) {
    bks.subscribe();
  }
}
