import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FacebookService) {
    let fbParams: FacebookInitParams = {
      appId: '228671707475003',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(fbParams);
  }
}
