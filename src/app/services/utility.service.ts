import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { FirebaseService } from './firebase.service';
// import { UserService } from './user.service';

@Injectable()
export class UtilityService {
  overlay: boolean;
  isOverlayClickable: boolean = true;
  drawer: boolean;
  sidebar: boolean;
  fadeOut: boolean;
  tutorial: boolean;
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
      (this.sidebar) ? this.hideSidebar() : null;
    }, 300);
  }
  showDrawer() {
    this.drawer = true;
    this.showOverlay();
  }
  hideDrawer() {
    (this.tutorial) ? this.tutorial = false : null;
    this.drawer = false;
    this.hideOverlay()
  }
  showSidebar() {
    this.sidebar = true;
    this.showOverlay();
  }
  hideSidebar() {
    this.sidebar = false;
    this.hideOverlay();
  }
}
