import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Walkthrough from "./components/Walkthrough";
import Dashboard from "./Pages/Protected/Dashboard/Dashboard";
import NavTabs from "./components/NavTabs";
import accountInfoForTesting from "./Pages/accountInfoForTesting";
import UserLogin from "./Pages/Unprotected/Access/Userlogin";
import UserRegister from "./Pages/Unprotected/Access/UserRegister";
import ItemCreator from "./components/ItemCreator";

import Helpeducation from "./Pages/Protected/Education";
import Team from "./Pages/Unprotected/Team";

/*import helpeducation from "./Pages/helpeducation";
import Team from "./Pages/Team";
import PrivateRoute from "./helpers"*/

// import Baseline from './components/UserDashboard/Baseline';

import AuthExample from './helpers/AuthService';

class App extends Component {

  render() {
    return (
      <div>

        {/*<Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={ItemCreator} />
            <Route exact path="/" component={Walkthrough} />
            <Route exact path="/" component={accountInfoForTesting} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/helpeducation" component={Helpeducation} />
            <Route path="/team" component={Team} />
          </div>
        </Router>*/}
        <AuthExample/>
      </div>
    );
  }

}

/*import Routes from './helpers/Routes'

class App extends Component {
    render() {
        return (
            <div className="App">
              <Routes />
            </div>
        );
    }
}

export default App;*/

export default App;
