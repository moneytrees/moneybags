import React, { Component } from "react";


export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <p className="text-center">
         
          after switching from home to dashboard and back to home page please
          refresh the page, add account or itmes wouldnt work: current issue.
          THANKS
        </p>
        <div className="container">
          <div>
            <button
              type="button"
              className="btn btn-outline-primary"
              id="link-btn"
            >
              Link Account
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              id="get-accounts-btn"
            >
              Get Accounts
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              id="get-item-btn"
            >
              Get Item
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              id="get-transactions-btn"
            >
              Get Transactions
            </button>
          </div>
        </div>
      </div>
    );
  }
}
