import { Component, Input } from '@angular/core';
import { BucketService, UtilityService } from '../../../services';

@Component({
  selector: 'addbucket',
  templateUrl: 'addbucket.html',
  styleUrls: ['./addbucket.scss']
})
export class AddbucketComponent {
  type: any = 'monthly';
  constructor(public bks: BucketService, public utils: UtilityService) {}
  addBucket(form, firstInput) {
    this.bks.addBucket(form);
    firstInput.focus();
    this.utils.hideDrawer();
  }
}
