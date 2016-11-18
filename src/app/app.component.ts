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
    </div>
    <overlay *ngIf="utils.overlay" [clickable]="utils.isOverlayClickable"></overlay>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public utils: UtilityService) {}
}
