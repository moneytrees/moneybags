import React, { Component } from "react";
import "./Hero.css";
import { Button, Container, Row, Col } from 'reactstrap';
import Logo from "../images/moneyTree.png";

class Hero extends Component {

    render() {
        return (
            <div className="hero">
                    <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute"
          }}
        >
          <video className="landing"
            loop
            autoPlay
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
            src="https://firebasestorage.googleapis.com/v0/b/timproject-2bef4.appspot.com/o/q37q5074cejger11pacs.hd.mp4?alt=media&token=4f0f3645-ff7f-4acd-bde2-ded8552e4b94"
            type="video/mp4"
          />
        </div>
                <Container>
                    <Row className="signIn">
                        <Col className="logo" md={{ size: 8, offset: 2 }}><img src={Logo} alt="logoPic" />
                        </Col>
                        <Col className="loginBtn" md={{ size: 8, offset: 2 }}>
                            <Button sm="12" color="secondary" size="lg" href="/login">Login</Button>
                            <Button sm="12" color="secondary" size="lg" href="/register">Register</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Hero;