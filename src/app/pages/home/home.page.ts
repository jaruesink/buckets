import { Component } from '@angular/core';
import { BucketService, FacebookService } from '../../services';

@Component({
  selector: 'home-page',
  template: `
    <header [isHome]="true" [title]="'Buckets'"></header>
    <bucketlist [loaded]="bks.bucketsLoaded && bks.invitesLoaded" [buckets]="bks.buckets" [invites]="bks.invites"></bucketlist>
    <addbucket></addbucket>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public bks: BucketService, public fbs: FacebookService) {}
}
