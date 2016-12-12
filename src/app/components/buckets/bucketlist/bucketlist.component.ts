import { Component, Input } from '@angular/core';
import { UserService, BucketService } from '../../../services';

@Component({
  selector: 'bucketlist',
  templateUrl: 'bucketlist.html',
  styleUrls: ['./bucketlist.scss']
})
export class BucketlistComponent {
  @Input() buckets: any;
  @Input() loaded: any;
  invitedTo: any;
  constructor(public user: UserService, public bks: BucketService) {
    this.user.subscribe(user_data => {
      if (user_data.invitedTo) {
        this.invitedTo = [];
        user_data.invitedTo.forEach(invite => {
          this.bks.getBucketByKey(invite.key).then(bucket => {
            (bucket as any).$key = invite.key;
            (bucket as any).invitedBy = invite.invitedBy;
            this.invitedTo.push(bucket);
          }).catch(error => {
            console.log('error getting bucket by ID: ', error)
          });
        });
        console.log('You are invited to: ', this.invitedTo);
      } else {
        this.invitedTo = [];
      }
    });
  }
}
