import React from "react";
import "./Plaid.css";


const PlaidButtons = (props) => (
  <div>

    <div className="row"className="plaidButtonContainter container">
      <div className="col-md-12">

        <button

          type="button"
          className="btn btn-outline-secondary plaidButton"
          id="get-accounts-btn"
          onClick={props.account}
        >
          Get Account 
            </button>
        {/* <button
          type="button"
          className="btn btn-outline-success"
          id="get-item-btn"
        >
          Get Item
            </button> */}
        <button
          type="button"
          className="btn btn-outline-secondary plaidButton"
          id="get-transactions-btn"
          onClick={props.transactions}
        >
          Get Transactions
            </button>
      </div>
    </div>
  </div>
);

export default PlaidButtons;