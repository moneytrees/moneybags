const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Achieve = new Schema({
    achievement_list:[
       {
        id: Number,
        name: String,
        points: Number,
        desc: String,
        item: String,
    }
    ]
});



module.exports = Achieve;