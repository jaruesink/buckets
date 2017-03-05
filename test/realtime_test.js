/* global describe, it */

const assert = require('assert');
const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/');
const app = feathers().configure(socketio(socket));
const status = app.service('realtime/user_status');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const user = new User({
  fbid: 1234567890,
  name: 'Test User',
  email: 'test@email.com'
});

describe('The realtime app', () => {
  it('can save a user', (done) => {
    status.on('updated', ({ status: new_status }) => {
      console.log('I have a new status: ', { new_status });
      done();
    });

    user.save().then(() => {
      status.update(user._id, { status: 'I have a status.' });
    });
  });
});
