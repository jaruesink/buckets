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
  friends: any;
  editor_id_array: Array<any>;
  constructor(public utils: UtilityService, public faces: FacebookService, public fbs: FirebaseService, public bks: BucketService, public user: UserService) {}
  inviteUserToEdit(id) {
    console.log('friends id: ', id);
    this.fbs.getUserByFBID(id).then((user) => {
      if (!this.bucket.invited) {this.bucket.invited = []};
      this.bucket.invited.push(id);
      this.bks.inviteUserToBucket(this.bucket, user, this.user.me);
      console.log('getting user by fbid', user);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
  cancelInvite(id) {
    this.fbs.getUserByFBID(id).then((user) => {
      this.bks.cancelInviteToBucket(this.bucket, user);
      console.log('getting user by fbid', user);
    }).catch(error => {
      alert('unable to process invite at this time');
      console.log('error getting user by fbid: ', error);
    });
  }
  removeAsEditor(editor) {
    this.bks.removeEditorFromBucket(this.bucket, editor);
  }
  ngOnChanges() {
    if (this.bucket) {
      this.editors = [];
      this.editor_id_array = [];
      if (this.bucket.editors) {
        this.bucket.editors.forEach(editor => {
          this.fbs.getUserByUID(editor).then(user_info => {
            console.log('got user by UID: ', user_info);
            this.editors.push(user_info);
            this.editor_id_array.push((user_info as any).fbid);
          }).catch(error => {
            console.log('error getting user by UID: ', error);
          });
        });
      }
      this.faces.getFriends().then(friends => {
        (friends as Array<any>).forEach((friend, index) => {
          if ( this.editor_id_array.indexOf(friend.id) > -1) {
            console.log('editor found: ', friend.id);
            (friends as Array<any>).splice(index, 1);
          }
        });
        this.friends = friends;
      }).catch(error => {
        console.log('error getting friends: ', error);
      });
    }
  }
}
