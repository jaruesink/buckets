import { Component } from '@angular/core';
import { AuthService, FirebaseService } from './services'

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.isLoadingAuth">
      <loading></loading>
    </div>
    <div [hidden]="auth.isLoadingAuth">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public firebase: FirebaseService) {

  }
}
