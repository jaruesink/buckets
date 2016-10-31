import { Component } from '@angular/core';
import { BucketService, HackService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [isHome]="true" [title]="'Home'"></header>
    <bucketlist [loaded]="bks.bucketsLoaded" [buckets]="bks.buckets"></bucketlist>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public bks: BucketService, public hack: HackService) {
    // hack for triggering data refresh
    let interval = setInterval(() => {
      hack.isLoaded(bks.buckets, interval);
    }, 50)
  }
}
