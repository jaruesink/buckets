import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService, UserService, HelpersService } from '../../services/';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private http: Http,
    private router: Router,
    private auth: AuthService,
    public helpers: HelpersService,
    public user: UserService
  ) { }

  logout() {
    this.helpers.loading = true;
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
      this.helpers.loading = false;
    });
  }

}
