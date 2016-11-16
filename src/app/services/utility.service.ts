import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { FirebaseService } from './firebase.service';
// import { UserService } from './user.service';

@Injectable()
export class UtilityService {
  overlay: boolean;
  drawer: boolean;
  constructor() {}
  overlayClick() {
    this.overlay = false;
    setTimeout(() => {
      this.drawer = false;
    }, 300);
  }
}
