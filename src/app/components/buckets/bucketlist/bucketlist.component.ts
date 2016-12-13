import { Component, Input } from '@angular/core';
import { BucketService } from '../../../services';

@Component({
  selector: 'bucketlist',
  templateUrl: 'bucketlist.html',
  styleUrls: ['./bucketlist.scss']
})
export class BucketlistComponent {
  @Input() buckets: any;
  @Input() loaded: any;
  @Input() invites: any;
  constructor(public bks: BucketService) {}
}
