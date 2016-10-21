import { Component, Input } from '@angular/core';
import { AuthService, UserService } from '../../services';

@Component({
  selector: 'header',
  template: `
  <nav class="navbar navbar-light bg-faded space-between">
    <a class="navbar-brand">
    <img [src]="user.me?.photo" width="30" height="30" class="d-inline-block align-top rounded">
    {{title}}
    </a>
    <button class="btn btn-danger" (click)="auth.logout()">Logout</button>
  </nav>
  `,
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  @Input() title;
  constructor(public auth: AuthService, public user: UserService) {}
}
