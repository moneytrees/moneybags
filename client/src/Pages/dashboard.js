import React, { Component } from "react";
import tamagotchi from "../imgs/tamagotchi200x180.png";
import neutralBigFoot from "../imgs/bigFootSVGs/neutralBigFoot.svg";
import Baseline from "../components/UserDashboard/Baseline";
import CashFlow from "../components/UserDashboard/CashFlow";
import FinancialOverview from "../components/UserDashboard/FinancialOverview";
import TotalSpending from "../components/UserDashboard/TotalSpending";
import TransactionDetail from "../components/UserDashboard/TransactionDetail";
import { Button } from 'reactstrap';

import {
  Card, CardImg
} from 'reactstrap';
// import "./dashboard.css";



class dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h1>Money Tree: User Dashboard</h1>
        <div>
          <a href="#!">
            <img className="tamagotchi" src={tamagotchi} alt="logo" />
          </a>
        </div>

        {/* <Baseline /> */}
        {/* <Button color="danger">Danger!</Button> */}
        <div className="col-12">
          <div className="container">
            <div className="CashFlow">
              
              <div className="row">
             
                <div className="col-md-4">


                  <Card>
                  <h1> BigFoot Avatar </h1>
                  <img className="neutralBigFoot" src={neutralBigFoot} alt="logo" />
                    

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                </div>
                <div className="col-md-8 text-center">
                <Card>
                  <h1> CashFlow </h1>
                    <CashFlow />
                    

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                  
                </div>
              </div>
            </div>

            {/* <div>
              <Card>

                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                </CardBody>
              </Card>
            </div> */}

            <hr>

            </hr>
          
            <div className="TotalSpending">
              
              <div className="row">
                <div className="col-md-6">

                 <Card>
                 <h1> TotalSpending</h1>
                    <TotalSpending />
                    

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                </div>

                <div className="col-md-6">
                <Card>
                 <h1> TransactionDetail</h1>
                    
                    <TransactionDetail />
                    

                    

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                </div>

              </div>
                
              </div>
            </div>
          </div>
        </div>
        
        // <FinancialOverview />

    
    );
  }
}

export default dashboard;
