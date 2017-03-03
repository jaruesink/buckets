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
import { HelpersService } from './helpers.service';

@Injectable()
export class FeathersService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  private app = feathers().configure(socketio(io.connect('http://localhost:3000')));

  private messages = this.app.service('messages');

  constructor(
    public helpers: HelpersService,
  ) {

    this.messages.on('created', (message) => {
      console.log('your message was sent', message.text);
    });

  }

  sendMessage() {
    this.messages.create({text: 'Hello from websocket!'});
  }
}
