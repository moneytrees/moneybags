import React, { Component } from "react";
import "./NoMatch.css";
import { Container, Row, Col } from 'reactstrap';
import Logo from "../images/moneyTree.png";

class NoMatch extends Component {

    render() {
        return (
            <div className="noMatch">
                <Container>
                    <Row>
                        <Col className="logo" md={{ size: 8, offset: 2 }}><img src={Logo} alt="logoPic" />
                        </Col>
                        <Col className="loginBtn" sm="12" md={{ size: 8, offset: 2 }}>
                            <h1>404 Page Not Found</h1>
                            <h1>
                                <span role="img" aria-label="Detective">
                                    🕵️‍
                                </span>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NoMatch;