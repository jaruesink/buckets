import { Component, Input } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'header',
  template: `
  <nav class="navbar navbar-light bg-faded space-between">
    <a class="navbar-brand">{{title}}</a>
    <button class="btn btn-danger" (click)="auth.logout()">Logout</button>
  </nav>
  `,
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  @Input() title;
  constructor(public auth: AuthService) {}
}
