import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Register.css";
/*import Auth from "../../helpers/Passport"*/

class Register extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          name: "",
          email: "",
          password: "",
          password2: ""
      };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    //handleChange(key, value) {
        this.setState({
            [event.target.name]: event.target.value
        });
        //this.setState({[key]: value })
    }

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state);


        event.preventDefault();

        //console.log(Auth.test);
        /*Auth.registerUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }).then(() => this.props.history.push('/')
        ).catch(err => console.log('error signing up: ', err));*/
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
            </div>
        )
    }
}

export default withRouter(Register)
