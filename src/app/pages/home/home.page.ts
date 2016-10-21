import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(public auth: AuthService) {
    console.log(auth.isLoggedIn);
  }
}
