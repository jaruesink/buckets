const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://username:password@ds141209.mlab.com:41209/buckets_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Error: ', error);
    })
});


beforeEach((done) => {
  const { bucket } = mongoose.connection.collections;
  if ( !bucket ) { done() }
  bucket.drop()
    .then(() => done())
    .catch(() => done());
});
