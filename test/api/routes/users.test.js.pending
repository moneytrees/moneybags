const should = require('should');
const request = require('supertest');
const faker = require('faker');
const app = require('../../../server');
const FPORT = process.env.FPORT || 3000;
app.listen(7000, function () {
    console.log("Starting tests... ");
});

 describe('User routes', function() {

     const pass = faker.internet.password();
     const fakeuser = {
         name: faker.name.firstName() + ' ' + faker.name.lastName(),
         email: faker.internet.email(),
         password: pass,
         password2: pass
     };

    describe('POST /api/register', function() {

        describe('Registering a new user email', function() {

            it('should return an id and success message for the newly registered email account.', function(done) {

                request(app)
                    .post('/api/register')
                    .set('Accept', 'application/json')
                    .send(fakeuser)
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(res.achievements);
                        should.not.exist(res.date);
                        should.not.exist(res.institutions);
                        should.not.exist(res.password);
                        should.not.exist(res.error);
                        should.exist(res.id);
                        should.exist(res.success);
                        expect(res.success).toContain(fakeuser.name);
                        res.body.should.be.an('object');
                        done();
                    });
            });
        });

        describe('Registering an existing user email', function() {

            it('should return error response for the already registered email account.', function(done) {

                request(app)
                    .post('/api/register')
                    .set('Accept', 'application/json')
                    .send(fakeuser)
                    .expect('Content-Type', /json/)
                    .expect(400)
                    .end(function(err, res) {
                        should.exist(res.error);
                        should.exist(res.error.email);
                        should.not.exist(res.id);
                        should.not.exist(res.success);
                        expect(res.error.email).toContain('Email already exists');
                        res.body.should.be.an('object');
                        done();
                    });
            });
        });
    });

     describe('POST /api/login', function() {

         describe('Logging in with an existing user email and valid password', function() {

             it('should return an id greater than zero and a success message welcoming the user back.', function(done) {

                 request(app)
                     .post('/api/login')
                     .set('Accept', 'application/json')
                     .send({ email: fakeuser.email, password: fakeuser.password })
                     .expect('Content-Type', /json/)
                     .expect(200)
                     .end(function(err, res) {
                         should.not.exist(res.token);
                         should.not.exist(res.error);
                         should.exist(res.id);
                         should.exist(res.success);
                         expect(res.success).toContain(fakeuser.name);
                         expect(res.success).toContain('Welcome back');
                         res.body.should.be.an('object');
                         done();
                     });
             });
         });

         describe('Logging in with an existing user email and an invalid password', function() {

             it('should return an error message with instructions on how to reset it', function(done) {

                 request(app)
                     .post('/api/login')
                     .set('Accept', 'application/json')
                     .send({ email: fakeuser.email, password: fakeuser.password + '_invalid817236' })
                     .expect('Content-Type', /json/)
                     .expect(400)
                     .end(function(err, res) {
                         should.exist(res.error);
                         should.exist(res.error.email);
                         should.not.exist(res.id);
                         should.not.exist(res.success);
                         expect(res.error.email).toContain('reset');
                         expect(res.error.email).toContain('password');
                         res.body.should.be.an('object');
                         done();
                     });
             });
         });
     });
 });
