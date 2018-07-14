import React, { Component } from "react";

import neutralBigFoot from "../../../imgs/bigFootSVGs/neutralBigFoot.svg";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievement from "../../../components/Achievements";
import ProgressBar from "../../../components/ProgressBar";
import { Card, CardImg } from "reactstrap";
import { Animated } from "react-animated-css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="background">
        {/* <h1>

          Money Tree: User Dashboard
        </h1> */}

        {/* <Baseline /> */}
        {/* <Button color="danger">Danger!</Button> */}
        <div className="col-12">
          <div className="container">
            <div className="Acheivement">
              <div className="row">
                <div className="col-md-4">
                  <Animated
                    animationIn="slideInDown"
                    animationOut="zoomOutDown"
                    isVisible={true}
                  >
                    {/* <h1> BigFoot Avatar </h1> */}
                    <img
                      className="neutralBigFoot"
                      src={neutralBigFoot}
                      alt="logo"
                    />
                  </Animated>
                </div>

                <div className="col-md-8 text-center">
                  <Animated
                    animationIn="slideInRight"
                    animationOut="zoomOutDown"
                    isVisible={true}
                  >
                    <Card>
                      <h1 id="dashboardTitle"> Achievements </h1>

                      <Achievement />

                      {/* <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

    </CardBody> */}
                    </Card>
                  </Animated>
                </div>
              </div>
            </div>

            <hr />
            <Animated
              animationIn="fadeInUp"
              animationOut="zoomOutDown"
              isVisible={true}
            >
              <div className="row">
                <div className="col-12">
                  {/* <div className="container"> */}
                  <div className="ProgressBar">
                    <Card>
                      <h1 id="dashboardTitle"> Progress Bar </h1>
                      <ProgressBar />
                    </Card>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </Animated>

            <hr />

            <div className="CashFlow">
              <div className="row">
                <div className="col-12 text-center">
                  <Zoom>
                    <Card>
                      <h1 id="dashboardTitle"> Cash Flow </h1>
                      <CashFlow />

                      {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                    </Card>
                  </Zoom>
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

            <hr />

            <div className="TransactionDetail">
              <div className="row">
                <div className="col-md-8">
                  <Zoom>
                    <Card>
                      <h1 id="dashboardTitle"> Transaction Detail</h1>

                      <TransactionDetail />

                      {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                    </Card>
                  </Zoom>
                </div>

                <div className="col-md-4">
                  <Fade right>
                    {/* <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}> */}
                    <Card>
                      <h1 id="dashboardTitle"> Total Spending</h1>
                      <TotalSpending />

                      {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                    </Card>
                    {/* </Animated> */}
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
