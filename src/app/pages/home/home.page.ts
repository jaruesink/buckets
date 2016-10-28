import { Component } from '@angular/core';
import { BucketService, HackService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [title]="'Buckets'"></header>
    <bucketlist [loaded]="bks.bucketsLoaded" [buckets]="bks.buckets"></bucketlist>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  buckets: Array<any> = [];
  bucketsLoaded: boolean = false;
  constructor(public bks: BucketService, public hack: HackService) {
    // hack for triggering data refresh
    let interval = setInterval(() => {
      hack.isLoaded(bks.buckets, interval);
    }, 50)
  }
}
