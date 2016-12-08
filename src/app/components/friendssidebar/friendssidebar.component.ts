import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService, FacebookService } from '../../services';

@Component({
  selector: 'friendssidebar',
  templateUrl: 'friendssidebar.html',
  styleUrls: ['./friendssidebar.scss']
})
export class FriendsSidebarComponent {
  constructor(public utils: UtilityService, public fbs: FacebookService) {
    fbs.getFriends();
  }
}
