import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserService } from '../../services';

@Component({
  selector: 'header',
  template: `
  <nav class="navbar navbar-dark bg-inverse space-between navbar-full">
    <button *ngIf="homeButton" class="btn btn-primary" (click)="goHome()"><i class="fa fa-home" aria-hidden="true"></i></button>
    <a class="navbar-brand">
      <i *ngIf="isHome" class="fa fa-home" aria-hidden="true"></i>
      {{title}}
    </a>
    <div>
      <img [src]="user.me?.photo" width="38" height="38" class="d-inline-block align-top rounded">
      <button class="btn btn-danger" (click)="auth.logout()">Logout</button>
    </div>
  </nav>
  `,
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  @Input() title;
  @Input() homeButton;
  @Input() isHome;
  constructor(public auth: AuthService, public user: UserService, public rtr: Router) {}
  goHome() {
    this.rtr.navigate(['/']);
  }
}
