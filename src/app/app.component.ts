import { Component } from '@angular/core';
import { AuthService, UtilityService, BucketService } from './services'

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.isLoadingAuth">
      <loading></loading>
    </div>
    <div [hidden]="auth.isLoadingAuth">
      <router-outlet></router-outlet>
    </div>
    <tutorial id="tutorial" *ngIf="utils.tutorial"></tutorial>
    <overlay *ngIf="utils.overlay"></overlay>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public utils: UtilityService) {}
}
