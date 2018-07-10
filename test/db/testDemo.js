const mocha = require("mocha");
const assert = require("assert");
const Inst = require("../models/inst.js");

//create a new institution 
describe("Saving records", function() {

    // create 
    it ("saves an institution to db", function() {
        var char = new Inst({
            id: "1",
            name: "Texas FCU"   
               
        });

        char.save();
    });
});

// describe tests 
// describe("some demo tests", function() {
//     // describe single test
// it("adds two num together", function() {
//     // what results do we expect
//     assert(2 + 3 === 5);
// })
// })