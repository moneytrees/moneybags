import React, { Component } from "react";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container
// } from 'reactstrap';

export default class AppNavbar extends Component {
//   state = {
//     isOpen: false
//   };

  render() {
    return (
      <div className="container">
        <div>
          <div>
            <button type="button" className="btn btn-primary" id="link-btn">
              Link Account
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="get-accounts-btn"
            >
              Get Accounts
            </button>
            <button type="button" className="btn btn-primary" id="get-item-btn">
              Get Item
            </button>
            <button
              type="button"
              className="btn btn-primary"
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
