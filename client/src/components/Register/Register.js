import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      success: false,
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

    //request to server to add a new email/password
    axios
      .post("/api/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      })
      .then(response => {
        if (!response.data.errmsg) {
          console.log("successful registration");
          this.setState({
            success: true,
            fireRedirect: true
          });
        } else {
          console.log(
            "There is already a user registered with this email. Proceed to login."
          );
          this.setState({
            success: false,
            fireRedirect: true
          });
        }
      })
      .catch(errors => {
        console.log(`Registration error: ${errors}`);
      });
  }

  render() {
    return (
      <div className="RegistrationForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

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
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password2">
                Confirm Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                value={this.state.password2}
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
              Sign up
            </button>
          </div>
        </form>
        {this.state.fireRedirect &&
          (this.state.success ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/register" />
          ))}
      </div>
    );
  }
}

export default Register;
