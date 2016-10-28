import { Component } from '@angular/core';
import { BucketService } from '../../services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bucket-page',
  template: `
    <header [title]="'Bucket Name'"></header>
  `,
  styleUrls: ['./bucket.page.scss']
})
export class BucketPage {
  constructor(public bks: BucketService, activeRoute: ActivatedRoute) {
    activeRoute.params.forEach((params: Params) => {
      const bucketLink = params['link'];
      console.log(bucketLink);
    });
  }
}
