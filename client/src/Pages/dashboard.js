import React, { Component } from "react";
import tamagotchi from "../imgs/tamagotchi200x220.png";
import Baseline from "../components/UserDashboard/Baseline";
import CashFlow from "../components/UserDashboard/CashFlow";
import FinancialOverview from "../components/UserDashboard/FinancialOverview";
import TotalSpending from "../components/UserDashboard/TotalSpending";
import TransactionDetail from "../components/UserDashboard/TransactionDetail";
import "./dashboard.css";
class dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Money Tree: User Dashboard</h1>
        <div>
          <a href="#!">
            <img className="tamagotchi" src={tamagotchi} alt="logo" />
          </a>
        </div>

        <Baseline />
        <div className="col-12">
          <div className="container">
            <div className="CashFlow">
              <h1> CashFlow </h1>
              <div className="row">
                <div className="col-6">
                  <CashFlow />
                </div>
                <div className="col-6 text-center">
                  we can add some text here
                </div>
              </div>
            </div>

            <div className="TotalSpending">
              <h1> TotalSpending </h1>
              <div className="row">
                <div className="col-6">
                  <TotalSpending />
                </div>
                <div className="col-6 text-center">
                  we can add some text here
                </div>
              </div>
            </div>
          </div>
        </div>
        <FinancialOverview />

        <TransactionDetail />
      </div>
    );
  }
}

export default dashboard;
