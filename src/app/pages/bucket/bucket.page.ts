import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BucketService, HackService } from '../../services';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import 'rxjs/Rx';

@Component({
  selector: 'bucket-page',
  templateUrl: 'bucket.page.html',
  styleUrls: ['./bucket.page.scss']
})
export class BucketPage {
  bucket: Object;
  isLoaded: boolean = false;
  currentMoment: any = moment();
  selectedMonth: any = moment();
  month: string = this.selectedMonth.format('MMMM');
  year: string = this.selectedMonth.format('YY');
  total: number = 0;
  budget: number = 100;
  constructor(public bks: BucketService, activeRoute: ActivatedRoute, public rtr: Router, hack: HackService) {
    activeRoute.params.forEach((params: Params) => {
      let link = params['link'];
      if ( bks.snapshot[link] ) {
        this.bucket = bks.snapshot[link];
        this.isLoaded = true;
        this.budget = bks.snapshot[link].budget;
      }
      bks.snapshot$.subscribe((snapshot) => {
        if (snapshot[link]) {
          this.bucket = snapshot[link];
          this.isLoaded = true;
          this.budget = bks.snapshot[link].budget;
        } else {
          rtr.navigate(['/']);
        }
      });
    });
    // hack for triggering data refresh
    if ( bks.buckets.length < 1 ) {
      let interval = setInterval(() => {
        hack.isLoaded(bks.buckets, interval);
      }, 10)
    };
  }
  ngOnDestroy() {
    this.bks.snapshot$.unsubscribe();
    this.bks.snapshot$ = new Subject();
  }
  deleteBucket(bucket) {
    this.rtr.navigate(['/']);
    this.bks.deleteBucket(bucket);
  }
  selectCurrentMonth() {
    this.selectedMonth = moment();
    this.changeDate(this.selectedMonth);
  }
  selectPreviousMonth() {
    this.selectedMonth = moment(this.selectedMonth).subtract(1, 'months');
    this.changeDate(this.selectedMonth);
  }
  selectNextMonth() {
    this.selectedMonth = moment(this.selectedMonth).add(1, 'months');
    this.changeDate(this.selectedMonth);
  }
  changeDate(date) {
    this.month = date.format('MMMM');
    this.year = date.format('YY')
  }
  updateTotal(total) {
    this.total = total;
  }
}
