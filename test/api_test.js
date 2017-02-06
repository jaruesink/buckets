const assert  = require('assert');
const request = require('supertest');
const app     = require('../server');

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((error, response) => {
        if (error) { console.log('error: ', error) };
        assert(response.text === 'api works');
        done();
      });
  });
});
