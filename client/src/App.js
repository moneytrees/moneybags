import React, { Component } from "react";
import "./App.css";
import Walkthrough from "./components/Walkthrough";
import AppNavbar from "./components/AppNavbar";
// import PieGraph from "./components/PieGraph" moved to totalspending component;
// import LineGraph from "./components/LineGraph"; moved to CashFlow component
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from "./Pages/dashboard";
import NavTabs from "./components/NavTabs";
import accountInfoForTesting from "./Pages/accountInfoForTesting";
import UserLogin from "./Pages/userlogin";
import UserRegister from "./Pages/userRegister";
import ItemCreator from "./components/ItemCreator";
// import Baseline from './components/UserDashboard/Baseline';
import helpeducation from "./Pages/helpeducation";
import Team from "./Pages/Team";

class App extends Component {
  render() {
    return (
      <div>
        <ItemCreator />
        <Router>
          <div>
            <NavTabs />
            {/*<Route path="/" component={PieGraph} />  moved to totalspending component*/}
            {/* <Route path="/" component={LineGraph} />   CashFlow component*/}
            <Route exact path="/" component={AppNavbar} />
            <Route exact path="/" component={Walkthrough} />
            <Route exact path="/" component={accountInfoForTesting} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/dashboard" component={dashboard} />
            <Route path="/helpeducation" component={helpeducation} />
            <Route path="/team" component={Team} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
