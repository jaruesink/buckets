import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <header [title]="'Buckets'"></header>
    <bucketlist></bucketlist>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor() {}
}
