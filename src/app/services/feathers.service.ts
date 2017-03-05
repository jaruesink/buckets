declare var require: any

const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const io = require('socket.io-client');

import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class FeathersService {

  socket = io.connect('http://localhost:3000/');
  app = feathers().configure(socketio(this.socket));
  status = this.app.service('realtime/user_status');

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
    this.status.update(id, {status});
  }
}
