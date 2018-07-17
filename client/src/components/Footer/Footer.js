import React, { Component } from "react";
import ContactForm from "../Contact"
import "./Footer.css";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="pageFooter">
                <Container>
                    <Row>
                        <Col> <h1>Money Tree</h1>
                        <hr /></Col>
                        <Col sm="12">
                            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Contact Us</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Contact Form</ModalHeader>
                                <ModalBody>
                                    <ContactForm/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="bob" color="danger" onClick={this.toggle}>Submit</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4" sm="12"> <h3>Company</h3>
                            <NavItem>
                                <NavLink href="/team">Our Team</NavLink>
                            </NavItem>
                        </Col>
                        <Col lg="4" sm="12"> <h3>Support</h3>
                            <NavItem>
                                <NavLink href="/helpeducation">FAQ</NavLink>
                            </NavItem>
                        </Col>
                        <Col lg="4" sm="12"> <h3>Legal</h3>
                            <NavItem>
                                <NavLink href="/dashboard">Terms of Service</NavLink>
                            </NavItem>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;