const express = require('express');
const router = express.Router();
const api_controller = require('../controllers/api_controller');
const bucket_controller = require('../controllers/bucket_controller');
const login_controller = require('../controllers/login_controller');
const user_controller = require('../controllers/user_controller');

const API = 'https://jsonplaceholder.typicode.com';

// Retrieve
const MongoClient = require('mongodb').MongoClient;

router.get('/', api_controller.greeting);

router.post('/bucket', bucket_controller.create);

router.put('/bucket/:id', bucket_controller.edit);

router.delete('/bucket/:id', bucket_controller.delete);

router.post('/login', login_controller.login);

router.post('/user', user_controller.create);

router.put('/user/:id', user_controller.edit);

// // Get all posts
// router.get('/posts', (req, res) => {

  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  //   .then(posts => {
  //     res.status(200).json(posts.data);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   });
// });

// Connect to the db
// MongoClient.connect("mongodb://130.211.169.138/local", function(err, db) {
//   console.log('connect to mongodb', err);
//   if(!err) {
//     console.log("We are connected");
//   }
// });

module.exports = router;
