import React, { Component } from "react";
import tamagotchi from ".././imgs/tamagotchi200x220.png";
import Baseline from "../components/UserDashboard/Baseline";
import CashFlow from "../components/UserDashboard/CashFlow";
import FinancialOverview from "../components/UserDashboard/FinancialOverview";
import TotalSpending from "../components/UserDashboard/TotalSpending";
import TransactionDetail from "../components/UserDashboard/TransactionDetail";
import PieGraph from "../components/PieGraph";
import LineGraph from "../components/LineGraph";

class Dashboard extends Component {
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
        <CashFlow />
        <PieGraph />
        <LineGraph />
        <FinancialOverview />
        <TotalSpending />
        <TransactionDetail />
      </div>
    );
  }
}

export default Dashboard;
