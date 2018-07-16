import React, { Component } from "react";
import Avatar from "../../../components/Avatar";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievements from "../../../components/UserDashboard/Achievements";
import ProgressBar from "../../../components/ProgressBar";
import ItemCreator from "../../../components/Plaid/ItemCreator";
import { Card } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import AchvToast from "../../../components/AchvToast";
import 'react-toastify/dist/ReactToastify.css';
import { Animated } from "react-animated-css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "../../../components/UserDashboard/UserDashboard.css";




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { newAchvArr: [] };
  }

  componentDidMount() {
    fetch("/api/getNewUserAchievements", {
      params: { email: localStorage.getItem("user_email") }
    })
      .then(data => data.json())
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


        fetch("/api/deleteNewAchievements", {
          method: "DELETE",
          params: { email: localStorage.getItem("user_email") }
        })
          .then(data => data.json())
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

        {/* <div className="col-md-12"> */}
        <div className="container">
          <div className="topSection">
            <div className="row">

              <div className="col-md-12 topCol">
                <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>

                  <Card className="topAvatar">
                    <div className="dashAvatar"> <Avatar /> </div>

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
            </div>
          </div>





          <div className="transactionDetail">
            <div className="row">
              <div className="col-md-8">
                <Zoom>
                  <Card className="transCard">
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



                    <div className="col-md-8 text-center">
                      <Animated
                        animationIn="slideInRight"
                        animationOut="zoomOutDown"
                        isVisible={true}
                      >


                        <div className="achvCard">

                          <div id="accordion">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <a className="btn btn-link collapsed" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <h2 className="dbTitle"> Achievements </h2>
                                  </a>
                                </h5>
                              </div>

                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                  <Achievements />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </Animated>
                    </div>





                  </Fade>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="CashFlow">
                <div className="col-12 text-center">
                  <Zoom>
                    <Card>
                      <h2 className="dbTitle"> Cash Flow </h2>
                      <CashFlow />
                    </Card>
                  </Zoom>
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
