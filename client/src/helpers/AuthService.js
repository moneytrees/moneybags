import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => (
            localStorage.getItem('isAuthenticated') ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
);

