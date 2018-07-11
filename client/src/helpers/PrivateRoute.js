import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, Auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location }}
        } />
    )} />
);