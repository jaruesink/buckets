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
    <div
    (click)="utils.overlayClick()"
    class="animated"
    *ngIf="utils.drawer"
    [ngClass]="{
      'fadeIn': utils.overlay,
      'fadeOut': !utils.overlay && utils.drawer
    }"
    id="overlay">
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public utils: UtilityService) {}
}
