import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthService from "./AuthService";
const Auth = new AuthService("http://localhost:3001");
const loggedIn = Auth.loggedIn();


PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
