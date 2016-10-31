import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BucketService } from '../../../services';

@Component({
  selector: 'bucketcard',
  template: `
    <div class="flip-container mt-1" [ngClass]="{'flipped': isFlipped}">
      <div class="flipper">
        <div class="card card-front" (click)="enterBucket()">
          <button class="edit-bucketcard btn btn-primary btn-small pull-right" (click)="flip($event)">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <div class="card-block">
            <h4 class="card-title">{{bucket?.name}}</h4>
          </div>
        </div>
        <div class="card card-back card-inverse">
        <button class="edit-bucketcard btn btn-danger btn-small pull-right" (click)="flip()">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
          <div class="card-block">
          <form (ngSubmit)="saveBucket(saveBucketForm, firstInput)" #saveBucketForm="ngForm">
            <div class="form-group">
              <label for="name">Bucket Name</label>
              <input #firstInput id="name" type="text" class="form-control" name="name" [(ngModel)]="bucket.name" autocomplete="off" required>
            </div>
            <div class="form-group">
              <label for="budget">Monthly Budget</label>
              <input id="budget" type="number" class="form-control" name="budget" [(ngModel)]="bucket.budget" autocomplete="off" required>
            </div>
            <button type="submit" class="btn btn-success btn-block">Save Bucket</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bucketcard.scss']
})
export class BucketcardComponent {
  @Input() bucket;
  isFlipped: boolean = false;
  currentName: string;
  constructor(public bks: BucketService, public router: Router) {}
  flip(event = null) {
    event ? event.stopPropagation() : null;
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
    this.bucket.budget = form.value.budget;
    this.bks.saveBucket(form, firstInput).then(() => {
      this.flip();
    }, () => {
      // on error
    });
  }
}
