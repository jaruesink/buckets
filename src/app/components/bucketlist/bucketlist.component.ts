import { Component } from '@angular/core';
import { HelpersService } from '../../services/';

@Component({
  selector: 'bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.scss']
})
export class BucketlistComponent {

  constructor(
    public helpers: HelpersService,
  ) { }

}
