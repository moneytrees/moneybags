import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import TransData from "../../helpers/TransData";
import PlaidButtons from "./PlaidButtons";
import "./Plaid.css";
require("dotenv").config({ path: "../.env" });

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
        .catch(err => JSON.stringify(err));
  }

  handleOnSuccess(token, metadata) {
    fetch("/api/get_access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ public_token: token, metadata: metadata, user_id: localStorage.getItem("user_id") })
    })
      .then(data => data.json())
      .then(response => console.log(response.access_token))
      .catch(err => console.log(err.message));
  }

  account() {
    fetch("/api/accounts"
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
      })
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => console.log(err.message));
  }

  transaction() {
    fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
    })
      .then(data => data.json())
      .then(response => console.log(response))
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
            className="btn connectBankBtn"
          >
            Connect your Financial Institution
          </PlaidLink>


          <PlaidButtons
            account={this.account}
            transactions={this.transaction} />
          <TransData />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ItemCreator;
