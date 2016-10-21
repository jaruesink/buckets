import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(public auth: AuthService) {}
}
