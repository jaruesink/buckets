import { Component } from '@angular/core';
import { AuthService, FirebaseService, UtilityService } from './services'

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.isLoadingAuth">
      <loading></loading>
    </div>
    <div [hidden]="auth.isLoadingAuth">
      <router-outlet></router-outlet>
      <div *ngIf="utils.overlay" id="overlay" (click)="utils.overlayClick()"></div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public utils: UtilityService) {

  }
}
