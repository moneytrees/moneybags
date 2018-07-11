const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    registered_inst: {
        _id: new ObjectId[{
            token: {
                type: String,
                required: true
            },
            inst_id: {
                type: String,
                required: true,
            },
            inst_name: {
                type: String,
                required: true
            }
        }]
    }
});

const Inst = mongoose.model("inst", InstSchema);

module.exports = Inst;
