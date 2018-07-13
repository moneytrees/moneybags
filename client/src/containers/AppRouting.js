import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Walkthrough from "../components/Walkthrough";
import Dashboard from "../Pages/Protected/Dashboard/Dashboard";
import accountInfoForTesting from "../Pages/accountInfoForTesting";
import UserLogin from "../Pages/Unprotected/Access/Userlogin";
import UserRegister from "../Pages/Unprotected/Access/UserRegister";
import ItemCreator from "../components/ItemCreator";
import Achievements from "../Pages/Protected/Achievements"
import Helpeducation from "../Pages/Protected/Education";
import Team from "../Pages/Unprotected/Team";
import NavbarAuth from "../components/Navbar/NavbarAuth";
import NavbarNoAuth from "../components/Navbar/NavbarNoAuth";
import Decode from "../helpers/Decode";
import { PrivateRoute } from "../helpers/AuthService";

const decode = new Decode();
let isAuth = localStorage.getItem('isAuthenticated');

const AppRouting = () => {
    return (
        <Router>
            <div>
                {
                    isAuth === true ? <NavbarAuth /> : <NavbarNoAuth />
                }
                <Route exact path="/" component={UserRegister} />
                <Route exact path="/login" component={UserLogin} />
                <Route exact path="/register" component={UserRegister} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/logout" render={() => {
                    decode.logout();
                    return <Redirect to='/login' />
                }} />
                <Route exact path="/test" component={accountInfoForTesting} />
                <Route exact path="/test" component={ItemCreator} />
                <Route exact path="/test" component={Walkthrough} />
                <PrivateRoute path="/achievements" component={Achievements} />
                <PrivateRoute path="/helpeducation" component={Helpeducation} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </div>
        </Router>
    );
};

export default AppRouting;