import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  me: any;
  constructor(private http: Http) { }
  setUser(user) {
    this.me = user;
  }
}
