const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new mongoose.Schema({
  account_id: {
    type: String,
    required: true
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
    type: INTEGER,
    required: true
  },
  name: {
    type: String,
  },
  official_name: {
    type: String,
    required: true
  },
  subtype: {
    type: String,
  },
  type: {
    type: String
  }
});

const Account = mongoose.model("account", AccountSchema);

module.exports = Account;