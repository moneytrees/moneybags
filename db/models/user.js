const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  account_id: {
    type: String,
  },
  balances: [{
    available: {
      type: String
    },
    current: {
      type: String
    },
  }],
  mask: {
    type: Number,
  },
  name: {
    type: String,
  },
  official_name: {
    type: String,
  },
  subtype: {
    type: String,
  },
  type: {
    type: String
  }
});

var Inst = new Schema({

  access_token: {
    type: String,
  },
  item_id: {
    type: String,
  },
  bank_name: {
    type: String,

  },
  inst_id: {
    type: String,
  },
  account_ids: [
    AccountSchema
  ]
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
  newAchv: [],
  transactions: [],
  cashFlowArray: [],
  canAddCashFlow: {
    type: Boolean,
    default: false
  },
  lastCashFlow: {
    type: Date,
    default: Date.now
  },
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
