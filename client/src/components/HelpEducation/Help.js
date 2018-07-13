import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  //  CardSubtitle, CardBody } from 'reactstrap';



class Help extends Component {
    render() {
        return (

            <div>
               
                <div className="container">
                <h2>Help Support Resources</h2>
                <div className ="col-12">
                <p></p>
                <p></p>
                <h3>Email</h3>
        
              

                
          <p> Email us at <a href="mailto:support@moneytree.com">support@moneytree.com</a> </p>
                <h3>Call</h3>
                <p>Call us at 555-555-5555</p>
                <h3>Discusion Forum</h3>
                <p> Connect with other people in our community <a href="http://www.wealthmanagement.com/forums" target="_blank">talking about personal finances</a> and making the most out of MoneyTree</p>
                </div>
             </div>
        </div>  
        );
    }
}

export default Help;