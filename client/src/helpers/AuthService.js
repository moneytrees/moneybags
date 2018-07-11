import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import Register from "../components/Register";
import Dashboard from "../components/UserDashboard";
import Login from "../components/Login";

const Auth = () => {
    return {
        isAuthenticated: false,
        authenticate: function (callback) {
            this.isAuthenticated = true
            setTimeout(callback, 100)
        },
        signout: function (callback) {
            this.isAuthenticated = false
            setTimeout(callback, 100)
        }
    } ;
};


/*class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { referrerRedirect: false };
        this.login = this.login.bind(this);
    }

    login() {
    Auth.authenticate(
            this.setState(() => ({
                referrerRedirect: true
            }))
        );
    }

    render() {
        const {from} = this.props.location.state || { from: { pathname: '/'} };
        const {referrerRedirect} = this.state;
        if (referrerRedirect)
            return <Redirect to={from}/>;

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}*/

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => (
            Auth.isAuthenticated ? <Component {...props} />
            : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} />
    )} />
);

export default function AuthExample () {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/dashboard">User Dashboard</Link></li>
            </ul>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} render={Auth}/>
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </div>
        </Router>
    )
}