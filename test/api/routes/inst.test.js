process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../app/models/book');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block

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

// ============================== 
// ROUTE TESTING BELOW 
//Before each test we empty the database
describe("Books", () => {
    beforeEach((done) => {
        Book.remove({}, (err) => {
            done();
        });
    });
    /*
     * Test the /GET route to get all the books
     */
    describe("/GET book", () => {
        it("it should GET all the books", (done) => {
            chai.request(server)
                .get("/book")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    // test our post route when adding something that is missing a property- we should get error 

    describe("/POST book", () => {
        it("it should NOT post a book without pages field", (done) => {
            let book = {
                title: "Title of Book Here",
                author: "Some Cool Auth",
                yearz: 2009
            }
            chai.request(server)
                .post("/book")
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    // err
                    res.body.errors.should.have.property("pages");
                    res.body.errors.pages.should.have.property("kind").eql("required");
                    done();
                });
        });

        // add a book 
        it("it should POST a book", (done) => {
            let book = {
                title: "Title of Book Here",
                author: "Some Cool Auth",
                yearz: 2009,
                pages: 100
            }
            chai.request(server)
                .post("/book")
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message").eql("Book successfully added");
                    res.body.book.should.have.property('title');
                    res.body.book.should.have.property("author");
                    res.body.book.should.have.property("pages");
                    res.body.book.should.have.property("yearz");
                    done();
                });
        });

    });

    // Test the /GET/:id route - get a book from db with id 
    describe("/GET/:id book", () => {
        it("should get a book given by the id", (done) => {
            let book = new Book({
                title: "Title of Book Here",
                author: "Some Cool Auth",
                yearz: 2009,
                pages: 100
            });
            book.save((err, book) => {
                chai.request(server)
                    .get("/book/" + book.id)
                    .send(book)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.should.have.property("title");
                        res.body.should.have.property("author");
                        res.body.should.have.property("yearz");
                        res.body.should.have.property("pages");
                        res.body.should.have.property("_id").eql(book.id);
                        done();

                    });
            });
        });
    });

    // test the /PUT/:id route -  that you can update an item 
describe("/PUT/:id book", () => {
    it("it should UPDATE a book given the id", (done) => {
        let book = new Book({title: "Title of Book Here",
        author: "Some Cool Auth",
        yearz: 2009,
        pages: 100})
        book.save((err, book) => {
            chai.request(server)
            .put("/book/" + book.id)
            .send({title: "Title of Book Here",
            author: "A Cooler Auth",
            yearz: 2009,
            pages: 100})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("message").eql("Book updated!");
                res.body.book.should.have.property("author").eql("A Cooler Auth");
                done();
            });
        });
    });
});
});
