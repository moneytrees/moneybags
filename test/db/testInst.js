// testing inst db if it has id, name, access_token, item_id
const mocha = require("mocha");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect; 

// path to file 
var Inst = require("/db/models/inst.js")

// create a new schema that accepts id, name, access token, and item id
const testSchema = new Schema({
    id: String,
    name: String,
    access_token: String,
    item_id: String,
});

// create a new collection called name 
// const Name = mongoose.model("Institution", testSchema);

describe("inst", function() {
    it("should be invalid if any properties in test schema are left empty", function(done) {
        var inst = new Inst();
        inst.validate(function(err) {
            expect(err.errors.testSchema).to.exist;
            done();
        });
    });
});

// describe("Database Tests", function () {
//     // before starting test, created a sandbox database connection
//     before(function (done) {
//         mongoose.connect("mongodb://localhost/testDatabase");
//         const db = mongoose.connection;
//         db.on("error", console.error.bind(console, "connection error"));
//         // once a connection invoke done ()
//             db.once("open", function () {
//                 console.log("we are connected to test db")
//                 done();
//             });
//         });
//     });
// describe("Test database", function () {
//     // save object with "name" value of "mike"
//     it("new name saved to test db", function (done) {
//         var testName = Name({
//             name: "Mike"
//         });
//         testName.save(done);
//     });
// });
//     it("Don't save incorrect format to db", function (done) {
//         // attempt to save wrong info, an error shoudld trigger
//         var wrongSave = Name({
//             notName: "Not Mike"
//         });

//         wrongSave.save(err => {
//             if (err) {
//                 return done();
//             }
//             throw new Error("Should generate error");
//         });
//     });

//     it("Should retrieve data from test db", function (done) {
//         // look up the "mike" object previously saved
//         Name.find({
//             name: "Mike"
//         }, (err, name) => {
//             if (err) {
//                 throw err;
//             }
//             if (name.length === 0) {
//                 throw new Error("No data!");
//             }
//             done();
//         });
//     });

