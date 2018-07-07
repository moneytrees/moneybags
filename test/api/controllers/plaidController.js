const should = require('should');
const request = require('supertest');
const app = require('../../../server');
app.listen(7000, function () {
    console.log("Starting tests... ");
});

describe('controllers', function() {

  describe('plaidController', function() {

    describe('GET /api/get_access_token', function() {

      it('should return a an access token', function(done) {

        request(server)
          .post('/api/get_access_token')
          .set('Accept', 'application/json')
          .send({ public_token: __plaidClient.publicToken})
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res.body.access_token);
            should.exist(res.body.item_id);
            res.body.should.be.an('object');
            done();
          });
      });

    });

  });

});
