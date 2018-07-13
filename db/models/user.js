const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  cashFlowArray: [],
  institutions: [],
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
