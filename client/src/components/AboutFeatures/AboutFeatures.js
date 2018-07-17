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
                        <Col className="feature" lg="4" sm="12"><h2>Avatar</h2>
                            <p>Our friendly sasquatch avatar Harry accompanies you on your financial budgeting and forecasting journey, keeping you accountable and serving as your strongest advocate along your path to monetary achievements.</p></Col>
                        <Col className="feature" lg="4" sm="12"><h2>Forecast</h2>
                            <p>See how your planned earning and spending affects your finances at various dates - 30 days, 1 year, 5 years, 10 years and 20 years into the future. The forecast graph shows forecasted balances for all of your accounts, which is particularly handy for the planning the purchase of large-ticket items such as a new car or home!</p></Col>
                        <Col lg="4" sm="12"><h2>Comparison</h2>
                            <p>Easily compare trend lines when considering purchases. MoneyTree will show you your financial cash flow trend and compare it with whatever financial transaction you are considering making Use our comparison feature when you are planing your next big purchase. Find out how for instance, a 15 year loan vs a 30 year loan can effect your financial health.</p></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutFeatures;