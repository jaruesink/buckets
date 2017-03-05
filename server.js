const feathers = require('feathers');
const rest = require('feathers-rest');
const errorHandler = require('feathers-errors/handler');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
mongoose.Promise = global.Promise;

// Connect to Mongoose if not in a test environment
if (process.env.NODE_ENV !== 'test') {
  const options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
  };
  mongoose.connect(
    'mongodb://username:password@ds141209.mlab.com:41209/buckets',
    options
  );
}


// Initiate our app
const app = feathers();
// Enable Socket.io


// Get our realtime routes
const realtime_routes = require('./server/routes/realtime');

app.use('/realtime', realtime_routes);

// Enable REST services
app.configure(rest());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(feathers.static(path.join(__dirname, 'dist')));

// Get our API routes
const api_routes = require('./server/routes/api');

// Set our api routes
app.use('/api', api_routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
// app.set('port', port);
console.info('port listening on: ', port);

// Listen on provided port, on all network interfaces.
app.listen(port);

// Set up error handling
app.use(errorHandler({
  html(error, req, res, next) {
    // render your error view with the error object
    res.render('error', error);
  }
}));

module.exports = app;
