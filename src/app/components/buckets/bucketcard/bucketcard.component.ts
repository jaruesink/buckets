import { Component, Input } from '@angular/core';

@Component({
  selector: 'bucketcard',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{bucket.name}}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./bucketcard.scss']
})
export class BucketcardComponent {
  @Input() bucket;
  constructor() {}
}
