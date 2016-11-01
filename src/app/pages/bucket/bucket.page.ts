import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BucketService, HackService } from '../../services';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import 'rxjs/Rx';

@Component({
  selector: 'bucket-page',
  template: `
    <header [homeButton]="true" [title]="bucket?.name"></header>
    <loading *ngIf="!isLoaded"></loading>
    <div *ngIf="isLoaded">
      <div class="container mt-1">
        <div class="space-between">
          <h1>{{month}}</h1>
          <div>
            <button class="btn" (click)="selectPreviousMonth()">Prev</button>
            <button class="btn" (click)="selectCurrentMonth()">Current</button>
            <button class="btn" (click)="selectNextMonth()">Next</button>
          </div>
        </div>
        <transactionlist [month]="selectedMonth" [key]="bucket.$key"></transactionlist>
      <div>
      <addtransaction [key]="bucket.$key"></addtransaction>
      <button class="btn btn-danger mt-1" (click)="deleteBucket(bucket)">Delete Bucket</button>
    </div>
  `,
  styleUrls: ['./bucket.page.scss']
})
export class BucketPage {
  bucket: Object;
  isLoaded: boolean = false;
  selectedMonth: any = moment().startOf('month');
  month: string = this.selectedMonth.format('MMMM');
  constructor(public bks: BucketService, activeRoute: ActivatedRoute, public rtr: Router, hack: HackService) {
    activeRoute.params.forEach((params: Params) => {
      let link = params['link'];
      if ( bks.snapshot[link] ) { this.bucket = bks.snapshot[link]; this.isLoaded = true; }
      bks.snapshot$.subscribe((snapshot) => {
        if (snapshot[link]) {
          this.bucket = snapshot[link];
          this.isLoaded = true;
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
    console.log('begin: ', this.selectedMonth.format('YYYY-MM-DD'));
    this.selectedMonth = moment().startOf('month');
    this.month = this.selectedMonth.format('MMMM');
    console.log('end: ', this.selectedMonth.format('YYYY-MM-DD'));
  }
  selectPreviousMonth() {
    console.log('begin: ', this.selectedMonth.format('YYYY-MM-DD'));
    this.selectedMonth = this.selectedMonth.subtract(1, 'months');
    this.month = this.selectedMonth.format('MMMM');
    console.log('end: ', this.selectedMonth.format('YYYY-MM-DD'));
  }
  selectNextMonth() {
    console.log('begin: ', this.selectedMonth.format('YYYY-MM-DD'));
    this.selectedMonth = this.selectedMonth.add(1, 'months');
    this.month = this.selectedMonth.format('MMMM');
    console.log('end: ', this.selectedMonth.format('YYYY-MM-DD'));
  }
}
