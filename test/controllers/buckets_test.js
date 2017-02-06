const assert  = require('assert');
const request = require('supertest');
const app     = require('../../server');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Bucket = mongoose.model('Bucket');

describe('Buckets controller', () => {


  it('Posts to /api/bucket creates a new bucket', (done) => {
    Bucket.count().then((count) => {

      request(app)
        .post('/api/bucket')
        .send({
          name: 'Test Bucket',
          type: 'budget',
          budget: 500
        })
        .end((error, response) => {
          // console.log(response.body);
          if (error) { console.log('error: ', error) };

          Bucket.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });

        });

    })
  })


  it('Put to /api/bucket/:id edits an existing bucket', (done) => {

    const bucket = new Bucket({
      name: 'Test Bucket',
      type: 'budget',
      budget: 500
    });

    bucket.save().then(() => {
      request(app)
        .put(`/api/bucket/${bucket._id}`)
        .send({
          budget: bucket.budget + 10
        })
        .end((error, response) => {
          // console.log(response.body);
          if (error) { console.log('error: ', error) };
          Bucket.findOne({ _id: bucket._id })
            .then((edited_bucket) => {
              assert(edited_bucket.budget === bucket.budget + 10);
              done();
            });
        });
    });

  });

  it('Delete to /api/bucket/:id deletes an existing bucket', (done) => {

    const bucket = new Bucket({
      name: 'Test Bucket',
      type: 'budget',
      budget: 500
    });

    bucket.save().then(() => {
      request(app)
        .delete(`/api/bucket/${bucket._id}`)
        .end((error, response) => {
          // console.log(response.body);
          if (error) { console.log('error: ', error) };
          Bucket.findOne({ _id: bucket._id })
            .then((find_result) => {
              assert(find_result === null);
              done();
            });
        });
    });

  });


})
