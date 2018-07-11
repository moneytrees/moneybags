import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import Register from "../components/Register";
/*import Dashboard from "../components/UserDashboard";*/
import Login from "../components/Login";

import Walkthrough from "../components/Walkthrough";
import Dashboard from "../Pages/Protected/Dashboard/Dashboard";
import NavTabs from "../components/NavTabs";
import accountInfoForTesting from "../Pages/accountInfoForTesting";
import UserLogin from "../Pages/Unprotected/Access/Userlogin";
import UserRegister from "../Pages/Unprotected/Access/UserRegister";
import ItemCreator from "../components/ItemCreator";

import Helpeducation from "../Pages/Protected/Education";
import Team from "../Pages/Unprotected/Team";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => (
            localStorage.getItem('isAuthenticated') ? <Component {...props} />
            : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} />
    )} />
);

export default function AppContainer() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/dashboard">User Dashboard</Link></li>
            </ul>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path='/dashboardx' component={Dashboard} />
          </div>
        </Router>
    )
}