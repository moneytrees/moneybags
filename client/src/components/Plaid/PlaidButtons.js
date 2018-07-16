import React from "react";
import "./Plaid.css";


const PlaidButtons = (props) => (
  <div>

    <div className="plaidButtonContainter container">
      <div>

        <button

          type="button"
          className="btn btn-outline-secondary plaidButton"
          id="get-accounts-btn"
          onClick={props.account}
        >
          Get Account Info 
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
          className="btn btn-outline-danger plaidButton"
          id="get-transactions-btn"
          onClick={props.transactions}
        >
          Get Transactional Info
            </button>
      </div>
    </div>
  </div>
);

export default PlaidButtons;