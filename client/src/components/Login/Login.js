import React, { Component } from "react";
import Avatar from "../Avatar";
import { Redirect } from "react-router-dom";
import Decode from "../../helpers/Decode";
const decode = new Decode();
class Login extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      referrerRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(data => data.json())
      .then((res) => {
        if (res.user == undefined) {
          let errors = {
            invalid: "Login invalid"
          }
          throw console.log(errors.invalid);
        } else {
          localStorage.setItem("isAuthenticated", true);
          const { token } = res;
          // Set token to auth header
          decode.setToken(token);
          // Decode token to get user data
          const profile = decode.getProfile(token);
          // Set current user
          localStorage.setItem("user_id", profile.id);
          localStorage.setItem("user_email", profile.email);

          window.location.reload();

          profile
            ? this.setState(() => ({ referrerRedirect: true }))
            : console.log("YOU GOT THE $%#%$% WRONG");

        }

      })
      .catch(errors => {
        console.log(`Login error: ${errors}`);
      });
  }
  render() {
    const { from } = {
      from: { pathname: "/dashboard" }
    };
    const { referrerRedirect } = this.state;
    if (referrerRedirect) return <Redirect to={from} />;
    return (
      <div id="login">
        <div className="LoginForm">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <Avatar />
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
                className="btn btn-primary col-mr-auto"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div >
    );
  }
}
export default Login;
