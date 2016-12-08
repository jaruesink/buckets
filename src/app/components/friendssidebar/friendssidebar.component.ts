import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService, FacebookService, FirebaseService } from '../../services';

@Component({
  selector: 'friendssidebar',
  templateUrl: 'friendssidebar.html',
  styleUrls: ['./friendssidebar.scss']
})
export class FriendsSidebarComponent {
  constructor(public utils: UtilityService, public faces: FacebookService, public fbs: FirebaseService) {
    faces.getFriends();
  }
  inviteUserToEdit(id) {
    console.log('friends id: ', id);
    this.fbs.getUserByFBID(id).then((data) => {
      console.log('getting user by fbid', data);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
}
