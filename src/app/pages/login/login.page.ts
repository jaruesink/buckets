import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, HelpersService, AuthService } from '../../services/';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(
    private router: Router,
    private auth: AuthService,
    public helpers: HelpersService,
    public user: UserService
  ) { auth.possibleLogin = false }

  login() {
    this.helpers.loading = true;
    this.auth.login().then((response) => {
      console.log('response from logging in: ', response);
      this.router.navigate(['/']);
      this.helpers.loading = false;
    }).catch(error => {
      console.error('error logging in', error);
      this.helpers.loading = false;
    });
  };


}
