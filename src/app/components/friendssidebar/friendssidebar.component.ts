import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService, FacebookService, FirebaseService, BucketService } from '../../services';

@Component({
  selector: 'friendssidebar',
  templateUrl: 'friendssidebar.html',
  styleUrls: ['./friendssidebar.scss']
})
export class FriendsSidebarComponent {
  @Input() bucket: any;
  constructor(public utils: UtilityService, public faces: FacebookService, public fbs: FirebaseService, public bks: BucketService) {
    faces.getFriends();
  }
  inviteUserToEdit(id) {
    console.log('friends id: ', id);
    this.fbs.getUserByFBID(id).then((data) => {
      let user = data[Object.keys(data)[0]];
      if (!this.bucket.invited) {this.bucket.invited = []};
      this.bucket.invited.push(id);
      this.bks.inviteUserToBucket(this.bucket, user);
      console.log('getting user by fbid', user);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
  cancelInvite(id) {
    this.fbs.getUserByFBID(id).then((data) => {
      let user = data[Object.keys(data)[0]];
      let index = this.bucket.invited.indexOf(id);
      this.bucket.invited.splice(index, 1);
      this.bks.cancelInviteToBucket(this.bucket, user);
      console.log('getting user by fbid', user);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
}
