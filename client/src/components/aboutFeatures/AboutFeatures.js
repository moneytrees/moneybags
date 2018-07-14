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
                    <p>With our helpful avatar Plátano, you can get instant feedback on your day to day spending. Spend too much and Plátano will get upset and it's not wise to upset a sasquatch.</p></Col>
                    <Col lg="4" sm="12"><h2>Forcast</h2>
                    <p>Check your financial forcast, and get projections for the next 1, 5, and even 10 years of growth. </p></Col>
                    <Col lg="4" sm="12"><h2>comparison</h2>
                    <p>Use our comparison feature when you are planing your next big purchase. Find out how for instance, a 15 year loan vs a 30 year loan can effect your financial health.</p></Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default AboutFeatures;