import { Component } from '@angular/core';
import { BucketService, HackService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [isHome]="true" [title]="'Buckets'"></header>
    <bucketlist [loaded]="bks.bucketsLoaded" [buckets]="bks.buckets"></bucketlist>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public bks: BucketService, public hack: HackService) {
    // hack for triggering data refresh
    if ( bks.buckets === null ) {
      let interval = setInterval(() => {
        hack.isLoaded(bks.buckets, interval);
      }, 10)
    };
  }
}
