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
      console.log('getting user data: ', user_data);
      if (user_data.invitedTo) {
        this.invitedTo = [];
        user_data.invitedTo.forEach(invite => {
          this.bks.getBucketByID(invite.key).then(bucket => {
            (bucket as any).invitedBy = invite.invitedBy;
            this.invitedTo.push(bucket);
          }).catch(error => {
            console.log('error getting bucket by ID: ', error)
          });
        });
        console.log('the user is invited to: ', this.invitedTo);
      }
    });
  }
}
