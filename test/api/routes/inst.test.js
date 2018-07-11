process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../app/models/book');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

// inputs: if I go to Plaid API and 
// then I should get user_id and access_token

// empty db before use 
describe("Model Here", () => {
    beforeEach((done) => {
        //Model.remove({}, err => {
            done();
        });
    });
// });

// check get route waiting for DB team 
// pending: routes completed, db setup and data, api

// Plaid Routes test
// 1 - login //  attach account // create transactions 
