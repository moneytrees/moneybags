import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
//import AuthService from "../../helpers/AuthService";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { referrerRedirect: false };
        this.login = this.login.bind(this);
    }

    login() {
        console.log(this.props.children);
        /*this.props.Auth.authenticate(
            this.setState(() => ({
                referrerRedirect: true
            }))
        );*/
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
}
export default Login;
  /*constructor() {
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
    this.Auth = new AuthService();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target);
  }

  handleSubmit(event) {
    console.log(this.state.email);
    event.preventDefault();

<<<<<<< HEAD
    // Post to login api route in order to authenticate user
      fetch("/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: this.state.email, password: this.state.password })
      })
          .then(data => data.json())
          .then(res => {
            // Save token to local storage

            /!*const { token } = res.data;
            // Set token to local storage
            localStorage.setItem("jwtToken", token);
            // Set token to auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));*!/

            if (!res.data.errmsg) {
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
=======
    const user = {
      email: this.state.email.toLowerCase().trim(),
      password: this.state.password.trim()
    };

    this.Auth.login(user);
>>>>>>> will
  }

  // componentWillMount() {
  //   if (this.Auth.loggedIn()) console.log("COMPONENT DID MOUNT");
  // }

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
            <button className="btn btn-primary col-1 col-mr-auto" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }*/

