import { Component } from '@angular/core';
import { BucketService } from '../../services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bucket-page',
  template: `
    <header [homeButton]="true" [title]="bucket.name"></header>
  `,
  styleUrls: ['./bucket.page.scss']
})
export class BucketPage {
  bucket: Object = { name: 'Loading...' };
  constructor(public bks: BucketService, activeRoute: ActivatedRoute) {
    activeRoute.params.forEach((params: Params) => {
      let link = params['link'];
    });
  }
}
