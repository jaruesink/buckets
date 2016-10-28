import { Component, Input } from '@angular/core';
import { AuthService, UserService } from '../../services';

@Component({
  selector: 'header',
  template: `
  <nav class="navbar navbar-light bg-faded space-between">
    <a class="navbar-brand">
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
  constructor(public auth: AuthService, public user: UserService) {}
}
