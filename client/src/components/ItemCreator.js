import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import Button from "./PlaidSelection/PlaidSelection";
import TransData from "../helpers/TransData"
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
    .then(response => console.log(response.access_token))
    .catch(err => console.log(err.message));
    console.log("LOLLLLLL");
  }

  //fetching account
  account() {
    fetch("/api/accounts")
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => err.message);
    console.log("account");
  }

  transaction() {
    fetch("/api/transactions", {
      method: "POST"
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
          >
            Open Link and connect your bank!
          </PlaidLink>

          <Button
           account={this.account} 
           transactions={this.transaction} />
           <TransData/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ItemCreator;
