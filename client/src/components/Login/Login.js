import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      loggedIn: false,
      fireRedirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.email);
    event.preventDefault();

    // Post to login api route in order to authenticate user
    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (!response.data.errmsg) {
          this.setState({
            //redirect to dashboard page
            loggedIn: true,
            fireRedirect: true
          });
        } else {
          console.log("Email or Password incorrect, please try again.");
          this.setState({
            //redirect to dashboard page
            loggedIn: false,
            fireRedirect: true
          });
        }
      })
      .catch(errors => {
        console.log(`Login error: ${errors}`);
      });
  }

  render() {
    return (
      <div className="LoginForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-7" />
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleSubmit}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        {this.state.fireRedirect &&
          (this.state.loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/login" />
          ))}
      </div>
    );
  }
}

export default Login;
