import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, HelpersService, UserService, FeathersService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(
    public helpers: HelpersService,
    private router: Router,
    public user: UserService,
    private feathers: FeathersService,
  ) { }

  ngOnInit() {}

}
