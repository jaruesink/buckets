import { Component } from '@angular/core';
import { BucketService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [isHome]="true" [title]="'Buckets'"></header>
    <bucketlist [loaded]="bks.bucketsLoaded" [buckets]="bks.buckets"></bucketlist>
    <addbucket></addbucket>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public bks: BucketService) {}
}
