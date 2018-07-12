import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Walkthrough from "../components/Walkthrough";
import Dashboard from "../Pages/Protected/Dashboard/Dashboard";
import NavTabs from "../components/NavTabs";
import accountInfoForTesting from "../Pages/accountInfoForTesting";
import UserLogin from "../Pages/Unprotected/Access/Userlogin";
import UserRegister from "../Pages/Unprotected/Access/UserRegister";
import ItemCreator from "../components/ItemCreator";
import Achievements from "../Pages/Protected/Achievements"
import Helpeducation from "../Pages/Protected/Education";
import Team from "../Pages/Unprotected/Team";
import { PrivateRoute } from "../helpers/AuthService";

const AppRouting = () => {
    return (
        <Router>
            <div>
                <NavTabs/>
                <Route exact path="/" component={UserRegister} />
                <Route exact path="/login" component={UserLogin}/>
                <Route exact path="/register" component={UserRegister} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/logout" render={() => {
                    localStorage.removeItem('isAuthenticated');
                    return <Redirect to='/login'/>
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