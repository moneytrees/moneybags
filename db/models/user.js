const mongoose = require("mongoose");
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


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  achievements: [],
  institutions: [Inst],
  transaction: [],
  date: {
    type: Date,
    default: Date.now
  },
  consecutive_login: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
