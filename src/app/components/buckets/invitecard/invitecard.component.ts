import { Component, Input } from '@angular/core';
import { BucketService, UserService } from '../../../services';

@Component({
  selector: 'invitecard',
  templateUrl: 'invitecard.html',
  styleUrls: ['./invitecard.scss']
})
export class InvitecardComponent {
  @Input() invite;
  constructor(public bks: BucketService, public user: UserService) {}
  acceptInvite() {
    this.user.getUserInfo(user => {
      this.bks.acceptInviteToBucket(this.invite, user);
    });
  }
  deleteInvite() {
    this.user.getUserInfo(user => {
      this.bks.deleteInviteToBucket(this.invite, user);
    });
  }
}
