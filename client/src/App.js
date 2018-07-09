import React, { Component } from "react";
import "./App.css";
import Walkthrough from "./components/Walkthrough";
import AppNavbar from "./components/AppNavbar";
// import PieGraph from "./components/PieGraph" moved to totalspending component;
// import LineGraph from "./components/LineGraph"; moved to CashFlow component
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from './Pages/dashboard';
import NavTabs from './components/NavTabs';
import accountInfoForTesting from './Pages/accountInfoForTesting'; 
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
<NavTabs/>
{/* <Route path="/" component={PieGraph} />  moved to totalspending component*/}
{/* <Route path="/" component={LineGraph} />   CashFlow component*/} 
<Route exact path="/" component={AppNavbar} />
<Route exact path="/" component={Walkthrough} />
<Route exact path="/dashboard" component={dashboard} />
<Route exact path="/" component={accountInfoForTesting} />


{/* <Baseline/> */}


</div>
</Router>
);
}
}
export default App;


