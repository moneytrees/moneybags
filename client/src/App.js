import React, { Component } from "react";
import "./App.css";
import Walkthrough from "./components/Walkthrough";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from "./Pages/dashboard";
import NavTabs from "./components/NavTabs";
import accountInfoForTesting from "./Pages/accountInfoForTesting";
import UserLogin from "./Pages/userlogin";
import UserRegister from "./Pages/userRegister";
import ItemCreator from "./components/ItemCreator";

import helpeducation from "./Pages/helpeducation";
import Team from "./Pages/Team";


// import Baseline from './components/UserDashboard/Baseline';

class App extends Component {

  render() {
    return (
      <div>
       
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={ItemCreator} />
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
