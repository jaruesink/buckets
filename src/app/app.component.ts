import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk';
import { HelpersService, AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private fb: FacebookService,
    private auth: AuthService,
    public helpers: HelpersService
  ) {
    this.helpers.loading = true;
    let fbParams: FacebookInitParams = {
      appId: '228671707475003',
      xfbml: true,
      version: 'v2.8',
      cookie: true
    };
    this.fb.init(fbParams);
    this.auth.checkLogin().then((accessToken) => {
      this.helpers.loading = false;
      if (accessToken) { this.router.navigate(['/']) }
      else { this.router.navigate(['/login']) }
    }).catch(() => {
      this.helpers.loading = false;
      this.router.navigate(['/login']);
    });
  }
}
