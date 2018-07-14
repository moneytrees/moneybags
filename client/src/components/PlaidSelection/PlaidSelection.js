import React, { Component } from "react";


const Button = (props) => (
  <div>

    <div className="container">
      <div>

        <button

          type="button"
          className="btn btn-outline-secondary"
          id="get-accounts-btn"
          onClick={props.account}
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
          onClick={props.transactions}
        >
          Get Transactions
            </button>
      </div>
    </div>
  </div>
);

export default Button;