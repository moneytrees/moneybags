import React, { Component } from "react";
import "./App.css";
import Walkthrough from "./components/Walkthrough";
import AppNavbar from "./components/AppNavbar";
import DataBody from "./components/DataBody";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from './Pages/dashboard';
import NavTabs from './components/NavTabs';
// import Baseline from './components/UserDashboard/Baseline';
import helpeducation from './Pages/helpeducation';


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
<NavTabs/>
<Route path="/" component={DataBody} />
<Route exact path="/" component={AppNavbar} />
<Route exact path="/" component={Walkthrough} />
<Route exact path="/dashboard" component={dashboard} />
<Route path="/helpeducation" component={helpeducation} />

{/* <Baseline/> */}


</div>
</Router>
);
}
}
export default App;


