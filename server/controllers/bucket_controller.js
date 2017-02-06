const Bucket = require('../models/bucket');

module.exports = {
  create(req, res, next) {
    const bucketProps = req.body;
    Bucket.create(bucketProps)
      .then(bucket => res.send(bucket))
      .catch(next);
  },

  edit(req, res, next) {
    const bucketID = req.params.id;
    const bucketProps = req.body;

    Bucket.findByIdAndUpdate({ _id: bucketID }, bucketProps)
      .then(() => Bucket.findById({ _id: bucketID }))
      .then(bucket => res.send(bucket))
      .catch(next);
  },

  delete(req, res, next) {
    const bucketID = req.params.id;
    const bucketProps = req.body;

    Bucket.findByIdAndRemove({ _id: bucketID }, bucketProps)
      .then(bucket => res.status(200).send(bucket))
      .catch(next);
  }
};
