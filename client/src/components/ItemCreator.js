import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import Button from "./PlaidSelection/PlaidSelection";
require("dotenv").config({ path: "../.env" });
var userTransactions = [];
var userInst = [];
var userAccount = [];

class ItemCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      public_key: null,
      token: null
    };
  }

  componentDidMount() {
    if (!this.state.public_key)
      fetch("/api/get_public_key")
        .then(data => data.json())
        .then(public_key => {
          this.setState(public_key);
        })
        .catch(err => console.log(err.message));
  }

  handleOnSuccess(token, metadata) {
    fetch("/api/get_access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ public_token: token, metadata: metadata })
    })
      .then(data => data.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err.message));
    console.log("LOLLLLLL");
  }

  //fetching account
  account() {
    fetch("/api/accounts")
      .then(data => data.json())
      .then(response => {
        buildAccountObj(response);
        console.log(userAccount);
      })
      .catch(err => err.message);
    console.log("account");
  }

  transaction() {
    fetch("/api/transactions", {
      method: "POST"
    })
      .then(data => data.json())
      .then(response => {
        buildTransObj(response);
        console.log(userAccount)
      })
      .catch(err => console.log(err.message));
    console.log("transaction");
  }

  render() {
    if (this.state.public_key) {
      return (
        <div id="foo">



          <PlaidLink
            clientName="Moneytrees"
            env="sandbox"
            apiVersion={"v2"}
            product={["auth", "transactions"]}
            onEvent={this.handleOnEvent}
            webhook="https://requestb.in"
            publicKey={this.state.public_key}
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}
          >
            Open Link and connect your bank!
          </PlaidLink>

          <Button
            account={this.account}
            transactions={this.transaction} />

        </div>
      );
    } else {
      return null;
    }
  }
}


// -------Builds out Inst object------- //
function buildInstObj(response) {

  var userInstObj = {
    "user": { "type": response.type },
    "registered_inst": { "id": response },
    item_id: response.item_id,
    access_token: response.access_token
  }

}


// -------Builds out account object------- //
function buildAccountObj(response) {
  for (var i = 0; i < response.accounts.length; i++) {
    var accountObj = {
      account_id: response.accounts[i].account_id,
      balances: [{
        available: response.accounts[i].balances.available,
        current: response.accounts[i].balances.current,
      }],
      mask: response.accounts[i].mask,
      name: response.accounts[i].name,
      official_name: response.accounts[i].official_name,
      subtype: response.accounts[i].subtype,
      type: response.accounts[i].type
    }
    userAccount.push(accountObj);
  }

}

// -------Builds out Trans object------- //
function buildTransObj(response) {
  for (var i = 0; i < response.transactions.length; i++) {
    var userTransObj = {
      "account": response.transactions[i].account_id,
      "amount": response.transactions[i].amount,
      "category": response.transactions[i].category[0],
      "category_id": response.transactions[i].category_id,
      "date": response.transactions[i].date,
      "iso_currency_code": response.transactions[i].iso_currency_code,
      "location": response.transactions[i].location.city,
      "name": response.transactions[i].name,
      "pending": response.transactions[i].pending,
      "transaction_id": response.transactions[i].transaction_id,
      "transaction_type": response.transactions[i].transaction_type
    }

    userTransactions.push(userTransObj);
  }
}




export default ItemCreator;
