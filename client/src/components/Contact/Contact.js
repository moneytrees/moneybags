import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="text" id="exampleName" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email address" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Enter your message" />
        </FormGroup>
        </Form>
        );
    }
  }

export default Contact;