const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/api_controller');
const bucket_controller = require('../controllers/bucket_controller');
const login_controller = require('../controllers/login_controller');
const user_controller = require('../controllers/user_controller');

router.get('/', api_controller.greeting);

router.post('/bucket', bucket_controller.create);
router.put('/bucket/:id', bucket_controller.edit);
router.delete('/bucket/:id', bucket_controller.delete);

router.post('/login', login_controller.login);

router.post('/user', user_controller.create);
router.put('/user/:id', user_controller.edit);
router.delete('/user/:id', user_controller.delete);

module.exports = router;
