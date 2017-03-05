const User = require('../models/user');

class UserService {
  update(id, userProps, params, next) {
    const userID = id;
    return User.findByIdAndUpdate({ _id: userID }, userProps, { new: true })
      .then(user => Promise.resolve(user))
      .catch(next);
  }
}

module.exports = UserService;
