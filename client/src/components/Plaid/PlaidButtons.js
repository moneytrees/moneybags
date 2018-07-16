import React from "react";
import "./Plaid.css";
import { Button } from "reactstrap";


const PlaidButtons = (props) => (
   <div>
    <div className="plaidButtonContainter container row">
      <div className="col-md-12">
        <Button
            type="button"
            className="btn btn-outline-secondary plaidButton"
            id="get-accounts-btn"
            onClick={props.account}
        >Pull Accounts</Button>
        {/* <button
          type="button"
          className="btn btn-outline-success"
          id="get-item-btn"
        >
          Get Item
            </button> */}
        <Button
          type="button"
          className="btn btn-outline-secondary plaidButton"
          id="get-transactions-btn"
          onClick={props.transactions}
        >
          Pull Transactions
            </Button>
      </div>
    </div>
  </div>
);

export default PlaidButtons;