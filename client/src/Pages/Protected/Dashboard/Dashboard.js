import React, { Component } from "react";
import Avatar from "../../../components/Avatar";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievements from "../../../components/UserDashboard/Achievements";
import ProgressBar from "../../../components/ProgressBar";
import ItemCreator from "../../../components/Plaid/ItemCreator";
import { Card, CardImg } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import AchvToast from "../../../components/AchvToast";
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css";
import axios from "axios";
import { Animated } from "react-animated-css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AchieveCard from "../../../components/Achievements/trophy";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { newAchvArr: [] };
  }

  componentDidMount() {
    axios
      .get("/api/getNewUserAchievements", {
        params: { email: localStorage.getItem("user_email") }
      })
      .then(response => {
        let newAchvArr = response.data;

        setTimeout(() => {
          if (newAchvArr.length > 0) {
            toast(
              <AchvToast
                title={newAchvArr[0].name}
                desc={newAchvArr[0].desc}
              />,
              { type: toast.TYPE.INFO, autoClose: 5000 }
            );

            let i = 1;

            let toastInterval = setInterval(() => {
              if (i >= newAchvArr.length) {
                clearInterval(toastInterval);
              } else {
                toast(
                  <AchvToast
                    title={newAchvArr[i].name}
                    desc={newAchvArr[i].desc}
                  />,
                  { type: toast.TYPE.INFO, autoClose: 5000 }
                );
                i++;
              }
            }, 5500);
          }
        }, 1500);

        console.log(newAchvArr);

        axios
          .delete("/api/deleteNewAchievements", {
            params: { email: localStorage.getItem("user_email") }
          })
          .then(response => {
            console.log(response);
          })
          .catch(errors => {
            console.log(`error: ${errors}`);
          });
      })
      .catch(errors => {
        console.log(`error: ${errors}`);
      });
  }

  render() {
    return (
      <div className="background">
        <ToastContainer />

        <div className="col-md-12">
          <div className="container">
            <div className="Achievement">
              <div className="row">


                <div className="col-md-12">
                  <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>



                    <Card className="top">
                      <Avatar />

                      <div className="row">
                        <div className="col-md-12">
                          <ItemCreator />
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-12">
                          <ProgressBar className="progress" />
                        </div>

                      </div>
                    </Card>

                  </Animated>
                </div>



                {/* <div className="col-md-8 text-center">
                  <Animated
                    animationIn="slideInRight"
                    animationOut="zoomOutDown"
                    isVisible={true}
                  > */}


                {/* <div className="achvCard">

                      <div id="accordion">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <a className="btn btn-link" className="collapsed" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h2 className="dbTitle"> Achievements </h2>
                              </a>
                            </h5>
                          </div>

                          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body"> */}


                {/* </div>
                          </div>
                        </div>

                      </div>
                    </div> */}
                {/* </Animated>
                </div>*/}
              </div>
            </div>

            {/* <div className="row">
           <div className="col-md-12">
           <ItemCreator/>
           </div>
           </div> */}



            <div className="TransactionDetail">
              <div className="row">
                <div className="col-md-8">
                  <Zoom>
                    <Card className="trans">
                      <h2 className="dbTitle"> Transaction Detail</h2>

                      <TransactionDetail />
                    </Card>
                  </Zoom>
                </div>


                <div className="col-md-4">
                  <Fade right>
                    <Card className="totalSpendCard">
                      <h2 className="dbTitle"> Total Spending</h2>
                      <TotalSpending />
                    </Card>
                  </Fade>
                </div>
              </div>

              <div className="achieveCard">
                <div className="row">
                  <div className="col-md-12">
                    <Fade right>
                      <Card>
                        <h2>HELLO</h2>



                        <AchieveCard>
                          
                          
                          </AchieveCard>



                      </Card>
                    </Fade>
                  </div>
                </div>
              </div>








              {/* <Animated
              animationIn="fadeInUp"
              animationOut="zoomOutDown"
              isVisible={true}
            >
              <div className="row">
                <div className="col-12">
                  <div className="ProgressBar">


                    <Card className="progressCard"> */}
              {/* <h2 className="dbTitle"> Progress Bar </h2> */}

              {/* // <div className="row">
                      //   <div className="col-md-12">
                      //     <ProgressBar className="progress"/>
                      //   </div>

                      // </div> */}

              {/* </Card>
                  </div>
                </div>
              </div>
            </Animated> */}


              <div className="row">
                <div className="CashFlow">
                  <div className="col-12 text-center">
                    <Zoom>
                      <Card>
                        <h1 className="dbTitle"> Cash Flow </h1>
                        <CashFlow />
                      </Card>
                    </Zoom>
                  </div>
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
