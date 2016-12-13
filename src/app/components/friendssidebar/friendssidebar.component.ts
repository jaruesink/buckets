import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService, FacebookService, FirebaseService, BucketService, UserService } from '../../services';

@Component({
  selector: 'friendssidebar',
  templateUrl: 'friendssidebar.html',
  styleUrls: ['./friendssidebar.scss']
})
export class FriendsSidebarComponent {
  @Input() bucket: any;
  editors: Array<any>;
  friends: Array<any>;
  editor_ids: Array<any>;
  invites: Array<any>;
  invite_pending: Array<any>;
  constructor(public utils: UtilityService, public faces: FacebookService, public fbs: FirebaseService, public bks: BucketService, public user: UserService) {
    this.bks.subscribeToInvitedBy(invites => {
      this.invites = [];
      this.editor_ids = [];
      this.invite_pending = [];
      for (let prop in invites) {
        let invite = invites[prop];
        this.invites.push(invite);
        if (invite.status === 'accepted') {
          this.editor_ids.push(invite.invitedFBID);
        } else if (invite.status === 'pending') {
          this.invite_pending.push(invite.invitedFBID);
        }
      };
      console.log('invites: ', this.invites);
    });
  }
  inviteUserToEdit(fbid) {
    console.log('friends fbid: ', fbid);
    this.fbs.getUserByFBID(fbid).then((user) => {
      this.bks.inviteUserToBucket(this.bucket, user, this.user.me);
      console.log('getting user by fbid', user);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
  cancelInvite(fbid) {
    this.bks.cancelInviteToBucket(fbid, this.bucket.$key);
  }
  removeAsEditor(editor) {
    this.bks.removeEditorFromBucket(this.bucket, editor);
  }
  ngOnChanges() {
    if (this.bucket) {
      this.faces.getFriends().then((friends:Array<any>) => {
        if (friends) {
          friends.forEach((friend, index) => {
            if ( this.editor_ids.indexOf(friend.id) > -1) {
              console.log('editor found: ', friend.id);
              friends.splice(index, 1);
            }
          });
          this.friends = friends;
        } else {
          this.friends = [];
        }
      }).catch(error => {
        console.log('error getting friends: ', error);
      });
    }
  }
}
