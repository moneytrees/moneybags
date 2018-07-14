import React, { Component } from "react";
import "./AboutFeatures.css";
import { Container, Row, Col } from 'reactstrap';

class AboutFeatures extends Component {
    render() {
        return (
            <div className="about">
            <Container>
                <Row>
                    <Col className="midTextAbout">Features</Col>
                </Row>
                <Row>
                    <Col lg="4" sm="12"><h2>Avatar</h2>
                    <p>With our helpful avatar Plátano, you can get instant feedback on your day to day spending. Spend too much and Plátano will get upset and it's not wise to upset a sasquatch</p></Col>
                    <Col lg="4" sm="12"><h2>Forcast</h2>
                    <p>Lorem ipsum dolor sit amet, quo ut inani nominavi nominati, vis ut etiam persecuti. Alia harum offendit eu sed, modo mucius sed ut. Nam nulla audiam placerat ut, ea detraxit dissentiet pri. An eam dicta soleat, probatus honestatis ad per, impetus meliore incorrupte usu no.</p></Col>
                    <Col lg="4" sm="12"><h2>comparison</h2>
                    <p>Lorem ipsum dolor sit amet, quo ut inani nominavi nominati, vis ut etiam persecuti. Alia harum offendit eu sed, modo mucius sed ut. Nam nulla audiam placerat ut, ea detraxit dissentiet pri. An eam dicta soleat, probatus honestatis ad per, impetus meliore incorrupte usu no.</p></Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default AboutFeatures;