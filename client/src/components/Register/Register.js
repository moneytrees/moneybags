import React, { Component } from "react";
import Avatar from "../Avatar";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Label } from "reactstrap";
import "./Register.css";



class Register extends Component {
  constructor(props) {
    super(props);

    // bound functions
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);

    // component state
    this.state = {
      email: "",
      name: "",
      password: "",
      referrerRedirect: false,
      feedback: false

    };
  }

  // Handle input changes
  handleInputChange(e) {
    this.setState({ [e.currentTarget.id]: e.target.value });
  }

  // Handle submission once all form data is valid
  handleValidSubmit() {
    const data = this.state;

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        password2: data.password2
      })
    })
      .then(data => data.json())
      .then(response => {
  
        if (response.success)
          this.setState({ referrerRedirect: true, feedback: response.success });
          else {
            console.log("********ERROR**********")
            console.log(response.error)
            console.log("********ERROR**********")

          }
      })
      .catch(errors => {
        console.log(`Login error: ${errors}`);
      });



  }



  render() {

    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" }
    };

    const { referrerRedirect } = this.state;
    if (referrerRedirect)
      return <Redirect to={{
        pathname: '/login',
        state: { feedback: this.state.feedback, from: '/register' }
      }} />;
    return (
      <div id="register">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <AvForm onValidSubmit={this.handleValidSubmit}>
              <AvGroup>
              <Avatar />
                <Label for="Name">Name</Label>
                <AvInput
                  id="name"
                  name="name"
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Sergei"
                  required
                  type="text"
                  value={this.state.firstName}
                />
                <AvFeedback>A first name is required to register</AvFeedback>
              </AvGroup>
              <AvGroup>
                <Label for="email">Email</Label>
                <AvInput
                  id="email"
                  name="email"
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="noreply@moneyBAGS.com"
                  required
                  type="email"
                  value={this.state.email}
                />
                <AvFeedback>A valid email is required to register.</AvFeedback>
              </AvGroup>

              <AvGroup>
                <Label for="password">Password</Label>
                <AvInput
                  id="password"
                  minLength="8"
                  name="password"
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="password"
                  required
                  type="password"
                  value={this.state.password}
                />
                <AvFeedback>
                  Passwords must be at least eight characters in length
              </AvFeedback>
                <Label for="password"> Confirm Password</Label>
                <AvInput
                  id="password2"
                  minLength="8"
                  name="password2"
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="password"
                  required
                  type="password"
                  value={this.state.password2}
                  validate={{ match: { value: "password" } }}
                />

                <span>
                  We recommend a password service like&nbsp;
                <a
                    href="https://www.lastpass.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LastPass
                </a>
                  &nbsp;or{" "}
                  <a
                    href="https://1password.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1Password
                </a>
                </span>
              </AvGroup>

              <Button className="register-btn">Register</Button>
            </AvForm>
          </div>
        </div>
      </div >
    );
  }
}
export default withRouter(Register)