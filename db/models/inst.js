const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Inst = new Schema({

    access_token: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    inst_id: {
        type: String,
        required: true
    }
});

const Inst = mongoose.model("inst", InstSchema);

module.exports = Inst;
