const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new mongoose.Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: "account"
  },
  amount: {
    type: INTEGER,
    required: true
  },
  category: {
    type: String,
  },
  category_id: {
    type: INTEGER,
  },
  date: {
    type: String,
    required: true
  },
  iso_currency_code: {
    type: String,
  },
  location: {
    type: String
  },
  name: {
    type: String
  },
  pending: {
    type: Boolean,
  },
  transaction_id: {
    type: INTEGER
  },
  transaction_type: {
    type: String
  },
});

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;