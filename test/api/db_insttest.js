const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const chai = require("chai").expect; 

// create a new schema that accepts id, name, access token, and item id
const testSchema = new Schema({
    id: String,
    name: String, 
    access_token: String,
    item_id: String,
});

// create a new collection called name 
const name = mongoose.model("name", testSchema);

describe("Database Tests", function() {
    // before starting test, created a sandbox database connection
    
})