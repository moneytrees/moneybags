import React, { Component } from "react";
import "./Hero.css";
import { Button, Container, Row, Col } from 'reactstrap';
import Logo from "../images/moneyTree.png";

class Hero extends Component {

    render() {
        return (
            <div className="hero">
                <Container>
                    <Row className="signIn">
                    <Col className="logo" md={{ size: 8, offset: 2 }}><img src={Logo} alt="logoPic"/>
                        </Col>
                        {/* <Col className="midText" md={{ size: 8, offset: 2 }}>Plant the seeds of your financial future
                        </Col> */}
                        <Col className="loginBtn" sm="12" md={{ size: 8, offset: 2 }}>
                        <Button color="secondary" size="lg" href="/login">Login</Button>
                        <Button color="secondary" size="lg" href="/register">Register</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Hero;