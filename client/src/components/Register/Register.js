import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import "./Register.css";

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

        <Form onSubmit={this.handleSubmit}>

          <FormGroup row>
            <Label for="name"
              sm={3}>
              Name:
          </Label>
            <Col sm={4}>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="email"
              sm={3}>
              Email:
          </Label>
            <Col sm={4}>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password"
              sm={3}>
              Password:{" "}
            </Label>
            <Col sm={4}>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password2"
              sm={3}>
              Confirm Password:{" "}
            </Label>
            <Col sm={4}>
              <Input
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                value={this.state.password2}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              className="button"
              onClick={this.handleSubmit}
              type="submit"

            >

              Sign Up

          </Button>
          </Col>
        </Form>


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
