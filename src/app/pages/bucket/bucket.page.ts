import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BucketService, HackService } from '../../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'bucket-page',
  template: `
    <header [homeButton]="true" [title]="bucket?.name"></header>
    <loading *ngIf="!isLoaded"></loading>
    <div class="container mt-1" *ngIf="isLoaded">{{bucket | json}}<div>
  `,
  styleUrls: ['./bucket.page.scss']
})
export class BucketPage {
  bucket: Object;
  isLoaded: boolean = false;;
  constructor(public bks: BucketService, activeRoute: ActivatedRoute, hack: HackService) {
    activeRoute.params.forEach((params: Params) => {
      let link = params['link'];
      if ( bks.snapshot[link] ) { this.bucket = bks.snapshot[link]; this.isLoaded = true; }
      bks.snapshot$.subscribe((snapshot) => {
        if (snapshot[link]) { this.bucket = snapshot[link]; this.isLoaded = true; }
      });
    });
    // hack for triggering data refresh
    if ( bks.buckets.length < 1 ) {
      let interval = setInterval(() => {
        hack.isLoaded(bks.buckets, interval);
      }, 10)
    };
  }
}
