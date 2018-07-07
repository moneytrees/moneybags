const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Images = new Schema({
    img: 
      { data: Buffer, contentType: String }
});

module.exports = Images;