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
  showDrawer() {
    this.utils.drawer = true;
    this.utils.overlay = true;
  }
  testing() {
    console.log('testing');
  }
  hideDrawer() {
    this.utils.overlay = false;
    setTimeout(() => {
      this.utils.drawer = false;
    }, 1000);
  }
}
