const axios = require('axios');
const User = require('../models/user');
const server_url = 'http://localhost:3000';
const fb_me_request =  `https://graph.facebook.com/v2.8/me?fields=id,name,email,picture`
const user_controller = require('./user_controller');

module.exports = {
  login(req, res, next) {
    getUserFromFB(req.body.access_token)
      .then((response) => {
        const {data: {id: fbid, name, email, picture:{data:{url: picture}}}} = response;
        const userProps = { fbid, name, email, picture };
        User.findOne({ fbid: fbid }).then((user) => {
          if (user) {
            const testProps = {
              fbid: user.fbid, name: user.name, email: user.email, picture: user.picture
            };
            if ( JSON.stringify(testProps) === JSON.stringify(userProps) ) {
              res.send(user);
            } else {
              req.params.id = user._id;
              req.body = userProps;
              user_controller.edit(req, res, next);
            }
          } else {
            req.body = userProps;
            user_controller.create(req, res, next);
          }
        });
      })
      .catch((error) => console.error('error creating user', error));
  }
}

function getUserFromFB(access_token) {
  return axios.get(`${fb_me_request}&access_token=${access_token}`);
}
