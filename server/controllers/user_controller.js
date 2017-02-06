const User = require('../models/user');

module.exports = {
  create(req, res, next) {
    const userProps = req.body;
    User.create(userProps)
      .then((user) => res.send(user))
      .catch(next);
  },

  edit(req, res, next) {
    const userID = req.params.id;
    const userProps = req.body;

    User.findByIdAndUpdate({ _id: userID }, userProps)
      .then(() => User.findById({ _id: userID }))
      .then(user => res.send(user))
      .catch(next);
  },

};
