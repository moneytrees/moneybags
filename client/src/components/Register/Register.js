import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Register.css";

/*import Auth from "../../helpers/Passport"*/

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      referrerRedirect: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  validateField(name, value) {
    const {password,password2, email} = this.state
//need some work here
    if((password===password2)  ){
      this.setState({passwordValid:true})
    }
    else{
      this.setState({passwordValid:false})
    }




  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      })
    })
      .then(data => data.json())
      .then(response => {
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
    if (referrerRedirect) return <Redirect to={from} />

  


    return (
      
      <div className="RegistrationForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="name" sm={3}>
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
            <Label for="email" sm={3}>
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
            <Label for="password" sm={3}>
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
            <Label for="password2" sm={3}>
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
              disabled={!this.state.passwordValid}
            >
              Sign Up
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default withRouter(Register);
