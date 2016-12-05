import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BucketService, TransactionsService } from '../../../services';
import * as moment from 'moment';

@Component({
  selector: 'bucketcard',
  templateUrl: 'bucketcard.html',
  styleUrls: ['./bucketcard.scss']
})
export class BucketcardComponent {
  @Input() bucket;
  isFlipped: boolean = false;
  currentName: string;
  total: number;
  name: string;
  budget: number;
  goal: number;
  constructor(public bks: BucketService, public router: Router, public trs: TransactionsService) {}
  ngOnInit() {
    this.resetFormModel();
  }
  ngOnChanges() {
    this.trs.unsubscribe(this.bucket.$key);
    let current_month, next_month;
    if (this.bucket.goal) {
      current_month = null;
      next_month = null;
    } else {
      current_month = moment().format('YYYY-MM');
      next_month = moment().add(1, 'M').format('YYYY-MM');
      console.log('current transactions month: ', current_month);
    }
    this.trs.subscribe(this.bucket.$key, current_month, next_month, (data) => {
      let total = 0;
      for (let transaction in data) {
        total += data[transaction].amount;
      }
      this.total = total;
    });
  }
  ngOnDestroy() {
    this.trs.unsubscribe(this.bucket.$key);
  }
  resetFormModel() {
    this.name = this.bucket.name;
    if (this.bucket.budget) {
      this.budget = this.bucket.budget;
    }
    if (this.bucket.goal) {
      this.goal = this.bucket.goal;
    }
  }
  flip(event = null) {
    event ? event.stopPropagation() : null;
    this.resetFormModel();
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      this.currentName = this.bucket.name;
    } else {
      // delay for animation effect
      setTimeout(() => {
        this.bucket.name = this.currentName || null;
      }, 200)
    }
  }
  enterBucket() {
    this.router.navigate([`/bucket/${this.bucket.link}`]);
  }
  saveBucket(form, firstInput) {
    form.value.key = this.bucket.$key
    this.bucket.name = form.value.name.trim();
    if (form.value.budget) {
      this.bucket.budget = form.value.budget;
    }
    if (form.value.goal) {
      this.bucket.goal = form.value.goal;
    }
    this.bks.saveBucket(form, firstInput).then(() => {
      this.flip();
    }, () => {
      // on error
    });
  }
}
