import React, { Component } from "react";
import "./App.css";
import Walkthrough from "./components/Walkthrough";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import NavTabs from "./components/NavTabs";
import UserLogin from "./pages/userlogin";
// import Baseline from './components/UserDashboard/Baseline';

class App extends Component {
  render() {
    return (
      // <div className="App">
      // <AppNavbar />
      // <Walkthrough />
      // <DataBody />
      // </div>
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/" component={AppNavbar} />
          <Route exact path="/" component={Walkthrough} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Baseline/> */}
        </div>
      </Router>
    );
  }
}
export default App;
