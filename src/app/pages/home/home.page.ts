import { Component } from '@angular/core';
import { BucketService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [isHome]="true" [title]="'Buckets'"></header>
    <div class="row">
      <div class="col-xs-12">
        <circlechart [total]="bks.total" [type]="'monthly'" [amount]="bks.amount" [key]="'summary'"></circlechart>
      </div>
    </div>
    <bucketlist [loaded]="bks.bucketsLoaded" [buckets]="bks.buckets"></bucketlist>
    <addbucket></addbucket>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public bks: BucketService) {}
}
