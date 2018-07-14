import React, { Component } from "react";

import neutralBigFoot from "../../../imgs/bigFootSVGs/neutralBigFoot.svg";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievements from "../../../components/UserDashboard/Achievements";
import ProgressBar from "../../../components/ProgressBar";
import { Card} from 'reactstrap';
import "./Dashboard.css";


class Dashboard extends Component {
  render() {
    return (


      <div className="background">

      

        {/* <Baseline /> */}
        {/* <Button color="danger">Danger!</Button> */}
        <div className="col-12">
          <div className="container">
            <div className="Acheivement">

              <div className="row">

                <div className="col-md-4">


              
                 
                    <img className="neutralBigFoot" src={neutralBigFoot} alt="logo" />


                    {/* <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

    </CardBody> */}
                 
                </div>
                <div className="col-md-8 text-center">
                  <Card>
                    <h1> Achievements </h1>

                    <Achievements />


                    {/* <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

    </CardBody> */}
                  </Card>

                </div>
              </div>
            </div>

            <hr>
            </hr>
            <div className="row">
              <div className="col-12">
                {/* <div className="container"> */}
                <div className="ProgressBar">
                  <Card>
                    <h1> Progress Bar </h1>
                    <ProgressBar />

                  </Card>

                </div>
                {/* </div> */}
              </div>
            </div>

            <hr>
            </hr>


            <div className="CashFlow">
              <div className="row">

                <div className="col-12 text-center">
                  <Card>
                  
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

            <div className="TransactionDetail">

              <div className="row">
                <div className="col-md-8">
                  <Card>
                    

                    <TransactionDetail />




                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>


                </div>

                <div className="col-md-4">
                  <Card>
                   
                    <TotalSpending />

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
      </div >
    );
  }
}

export default Dashboard;
