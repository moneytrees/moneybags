import React, { Component } from "react";
import neutralBigFoot from "../../../imgs/bigFootSVGs/neutralBigFoot.svg";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievement from "../../../components/Achievements";
import ProgressBar from "../../../components/ProgressBar"
import { Card, CardImg } from 'reactstrap';
import { Animated } from "react-animated-css";
import "./Dashboard.css";


class Dashboard extends Component {

  render() {
    return (


      <div className="background">

        <div className="col-12">
          <div className="container">

            <div className="Acheivement">



              <div className="row">

               
                  <div className="col-md-4">
                  <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>
                    
                      {/* <h1> BigFoot Avatar </h1> */}
                      <img className="neutralBigFoot" src={neutralBigFoot} alt="logo" />
                    
                    </Animated>
                  </div>
                


                <div className="col-md-8 text-center">

                <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}>
                  <Card>
                    <h1> Achievements </h1>

                    <Achievement />

                  </Card>
                  </Animated>

                </div>
              </div>
            </div>

            <hr>
            </hr>
            <Animated animationIn="fadeInUp" animationOut="zoomOutDown" isVisible={true}>
              <div className="row">
                <div className="col-12">
                  <div className="ProgressBar">
                    <Card>
                      <h1> Progress Bar </h1>
                      <ProgressBar />
                    </Card>
                  </div>
                </div>
              </div>
            </Animated>

            <hr>
            </hr>


            <div className="CashFlow">
              <div className="row">

                <div className="col-12 text-center">
                
                  <Card>

                    <h1> Cash Flow </h1>
  <CashFlow />
                  </Card>
               
               
                </div>
              </div>
            </div>

            <hr>

            </hr>

            <div className="TransactionDetail">

              <div className="row">
                <div className="col-md-8">
                <Animated animationIn="slideInLeft" animationOut="zoomOutDown" isVisible={true}>
                  <Card>

                    <h1> Transaction Detail</h1>


                    <TransactionDetail />
                  </Card>

                </Animated>



   

                </div>

                <div className="col-md-4">
                <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}>
                  <Card>
                    <h1> Total Spending</h1>
                    <TotalSpending />
                  </Card>

                </Animated>

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
