import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="text" id="exampleName" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        </Form>
        );
    }
  }

export default Contact;