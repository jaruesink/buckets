const feathers = require('feathers');
const realtime = feathers();


const user_controller = require('../controllers/user_controller');

realtime.use('/user_status', {
  update(data, params, next) {
    user_controller.edit_realtime(data, params, next);
  }
});

module.exports = realtime;
