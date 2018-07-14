const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AchieveSchema = new Schema({

    _id: String,
    name: String,
    desc: String,
    item: String,
    cosmetics: {
        id: String,
        name: String,
        data: Buffer,
        contentType: String
    }

});



const Achieve = mongoose.model("Achieve", AchieveSchema);

module.exports = Achieve;