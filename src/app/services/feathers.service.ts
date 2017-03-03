declare var require: any

const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const io = require('socket.io-client');
const localstorage = require('feathers-localstorage');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest/client');
// const authentication = require('feathers-authentication/client');

import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
import { UserService } from './user.service';

@Injectable()
export class FeathersService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  private app = feathers().configure(socketio(io.connect('http://localhost:3000')));
  private status = this.app.service('realtime/user_status');

  constructor(
    public user: UserService,
  ) {
    this.status.on('updated', ({status}) => {
      console.log('your status was updated', status);
      this.user.me.status = status;
    });
  }

  updateStatus(status) {
    const id = this.user.me._id;
    // debugger;
    this.status.update({id, status});
  }
}
