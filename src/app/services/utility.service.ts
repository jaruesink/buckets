import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { FirebaseService } from './firebase.service';
// import { UserService } from './user.service';

@Injectable()
export class UtilityService {
  overlay: boolean;
  isOverlayClickable: boolean = true;
  drawer: boolean;
  fadeOut: boolean;
  constructor() {}
  showOverlay() {
    this.overlay = true;
  }
  hideOverlay() {
    this.fadeOut = true;
    setTimeout(() => {
      this.overlay = false;
      this.fadeOut = false;
      (this.drawer) ? this.hideDrawer() : null;
    }, 300);
  }
  showDrawer() {
    this.drawer = true;
    this.showOverlay();
  }
  hideDrawer() {
    this.drawer = false;
    this.hideOverlay()
  }
}
