const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Initiate our app
const app = express();

// Connect to Mongoose if not in a test environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://username:password@ds141209.mlab.com:41209/buckets');
}

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Get our API routes
const api = require('./server/routes/api');

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));

// Set up error handling
app.use((error, req, res, next) => {
  res.status(422).send({ error: error.message });
});

module.exports = app;
