const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Inst = new mongoose.Schema({
    
    type: String,
    
    inst:
        [
            {id: String,
             name: String   
            }
        ],

    required: true

});

module.exports = Inst;