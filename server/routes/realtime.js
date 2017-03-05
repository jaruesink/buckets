const feathers = require('feathers');

const realtime = feathers();

const socketio = require('feathers-socketio');

realtime.configure(socketio({ wsEngine: 'uws' }, (io) => {
  io.on('connection', (socket) => {
    socket.emit('news', { text: 'A client connected!' });
  });

  // Registering Socket.io middleware
  io.use((socket, next) => {
    // Exposing a request property to services and hooks
    socket.feathers.referrer = socket.request.referrer;
    next();
  });
}));

const UserService = require('../controllers/user_service');

realtime.use('/user_status', new UserService());

module.exports = realtime;
