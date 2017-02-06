const assert  = require('assert');
const request = require('supertest');
const app     = require('../../server');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');

describe('User controller', () => {


  it('Posts to /api/user creates a new user', (done) => {
    User.count().then((count) => {

      request(app)
        .post('/api/user')
        .send({
          fbid: 1234567890,
          name: 'Test User',
          email: 'test@email.com'
        })
        .end((error, response) => {
          // console.log(response.body);
          if (error) { console.log('error: ', error) };

          User.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });

        });

    })
  })


  it('Put to /api/user/:id edits an existing user', (done) => {

    const user = new User({
      fbid: 1234567890,
      name: 'Test User',
      email: 'test@email.com'
    });

    user.save().then(() => {
      request(app)
        .put(`/api/user/${user._id}`)
        .send({
          name: 'Joe Tester'
        })
        .end((error, response) => {
          // console.log(response.body);
          if (error) { console.log('error: ', error) };
          User.findOne({ _id: user._id })
            .then((edited_user) => {
              assert(edited_user.name === 'Joe Tester');
              done();
            });
        });
    });

  });
  //
  // it('Delete to /api/bucket/:id deletes an existing bucket', (done) => {
  //
  //   const bucket = new Bucket({
  //     name: 'Test Bucket',
  //     type: 'budget',
  //     budget: 500
  //   });
  //
  //   bucket.save().then(() => {
  //     request(app)
  //       .delete(`/api/bucket/${bucket._id}`)
  //       .end((error, response) => {
  //         // console.log(response.body);
  //         if (error) { console.log('error: ', error) };
  //         Bucket.findOne({ _id: bucket._id })
  //           .then((find_result) => {
  //             assert(find_result === null);
  //             done();
  //           });
  //       });
  //   });
  //
  // });


})
