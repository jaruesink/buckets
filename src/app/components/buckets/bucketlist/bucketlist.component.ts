import { Component, Input } from '@angular/core';

@Component({
  selector: 'bucketlist',
  template: `
  <loading *ngIf="!loaded"></loading>
  <div [hidden]="!loaded" class="container mt-2">
    <ul class="list-unstyled space-between">
      <li *ngFor="let bucket of buckets">
        <bucketcard [bucket]="bucket"></bucketcard>
      </li>
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
  @Input() buckets: any;
  @Input() loaded: any;
  constructor() {}
}
