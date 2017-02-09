import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, HelpersService, UserService, } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(
    private auth: AuthService,
    public helpers: HelpersService,
    private router: Router,
    public user: UserService
  ) { }

  ngOnInit() {
    this.helpers.loading = true;
    this.auth.checkLogin().then(() => {
      this.helpers.loading = false;
    });
  }

}
