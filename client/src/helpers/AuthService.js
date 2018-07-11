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
            <NavTabs/>
            <Route exact path="/" component={UserRegister} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/team" component={Team} />
            <Route render={() => {
                      localStorage.removeItem('isAuthenticated');
                      return <Redirect to='/login'/>
            }} />
            <Route exact path="/test" component={accountInfoForTesting} />
            <Route exact path="/test" component={ItemCreator} />
            <Route exact path="/test" component={Walkthrough} />
            <PrivateRoute path="/helpeducation" component={Helpeducation} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </div>
        </Router>
    )
}