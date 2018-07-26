import React, { Component } from "react";
import Avatar from "../../../components/Avatar";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievements from "../../../components/UserDashboard/Achievements";
import ItemCreator from "../../../components/Plaid/ItemCreator";
import { Card } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import AchvToast from "../../../components/AchvToast";
import 'react-toastify/dist/ReactToastify.css';
import { Animated } from "react-animated-css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "../../../components/UserDashboard/UserDashboard.css";
import Footer from "../../../components/Footer";




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { newAchvArr: [] };
  }

  componentDidMount() {
    fetch("/api/getNewUserAchievements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: localStorage.getItem("user_email") })
    })
      .then(data => data.json())
      .then(response => {

        let newAchvArr = response;

        console.log(newAchvArr);

        setTimeout(() => {
          console.log(newAchvArr);
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
                fetch("/api/deleteNewAchievements", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ email: localStorage.getItem("user_email") })
                })
                  .then(data => data.json())
                  .then(response => {
                    console.log(response);
                  })
                  .catch(errors => {
                    console.log(`error: ${errors}`);
                  });
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
      })
      .catch(errors => {
        console.log(`error: ${errors}`);
      });
  }

  render() {
    return localStorage.getItem("bank_name")  ? (


      <div className="background">
        <ToastContainer />


        <div className="container">

          <div className="topSection">
            <div className="row">
              <div className="col-md-4">
                <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>
                  <Card className=" topAvatarshadow-lg p-3 mb-5 bg-white rounded">
                    <div className="dashAvatar">

                      <Avatar />

                    </div>


                    <div className="row">
                      <div className="col-md-12 threeDashBtn" >
                        <ItemCreator />
                      </div>
                    </div>
                  </Card>
                </Animated>
              </div>

              <div className="col-md-8">

                <div className="achvCard shadow-lg p-3 mb-5 bg-white rounded">
                  <div id="accordion">
                    <h5 className="mb-0">
                      <a className="btn btn-link collapsed" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <h2 className="dbTitle"><i className="fa fa-trophy" aria-hidden="true"></i>Achievements </h2>
                      </a>
                    </h5>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <Achievements />
                      </div>
                    </div>
                    {/* </div> */}

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="transactionDetail">
            <div className="row">
              <div className="col-md-8">
                <Zoom>
                  <Card className="transCard shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="dbTitle"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Transaction Detail</h2>

                    <TransactionDetail />
                  </Card>
                </Zoom>
              </div>


              <div className="col-md-4">
                <Fade right>
                  <Card className="totalSpendCard shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="dbTitle"> <i className="fa fa-credit-card" aria-hidden="true"></i> Total Spending</h2>
                    <TotalSpending />
                  </Card>
                </Fade>
              </div>
            </div>


            <div className="row">
              <div className="CashFlow">
                <div className="col-md-12">
                  <Zoom>
                    <Card>
                      <h2 className="dbTitle"><i className="fa fa-money" aria-hidden="true"></i>  Cash Flow </h2>
                      <CashFlow />
                    </Card>
                  </Zoom>
                </div>
              </div>
            </div>


          </div>
        </div>
        <Footer />
      </div>


    ) :

        (


            <div className="background">
              <ToastContainer />
              <div className="container">

                <div className="topSection">
                  <div className="row">
                    <div className="col-md-4">
                      <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>
                        <Card className=" topAvatarshadow-lg p-3 mb-5 bg-white rounded">
                          <div className="dashAvatar">

                            <Avatar />

                          </div>


                          <div className="row">
                            <div className="col-md-12 threeDashBtn" >
                              <ItemCreator />
                            </div>
                          </div>
                        </Card>
                      </Animated>
                    </div>

                    <div className="col-md-8">

                      <div className="achvCard shadow-lg p-3 mb-5 bg-white rounded">
                        <div id="accordion">
                          <h5 className="mb-0">
                            <a className="btn btn-link collapsed" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              <h2 className="dbTitle"><i className="fa fa-trophy" aria-hidden="true"></i>Achievements </h2>
                            </a>
                          </h5>
                          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                              <Achievements />
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="transactionDetail">
                  <div className="row">
                    <div className="col-md-8">
                      <Zoom>
                        <Card className="transCard shadow-lg p-3 mb-5 bg-white rounded">
                          <h2 className="dbTitle"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Transaction Detail</h2>
                          <h5>You must have a bank account registered before seeing your transaction details</h5>
                        </Card>
                      </Zoom>
                    </div>


                    <div className="col-md-4">
                      <Fade right>
                        <Card className="totalSpendCard shadow-lg p-3 mb-5 bg-white rounded">
                          <h2 className="dbTitle"> <i className="fa fa-credit-card" aria-hidden="true"></i> Total Spending</h2>
                          <h5>You must have a bank account registered before seeing your total spending</h5>
                        </Card>
                      </Fade>
                    </div>
                  </div>


                  <div className="row">
                    <div className="CashFlow">
                      <div className="col-md-12">
                        <Zoom>
                          <Card>
                            <h2 className="dbTitle"><i className="fa fa-money" aria-hidden="true"></i>  Cash Flow </h2>
                            <h5>You must have a bank account registered before seeing your cash flow</h5>
                          </Card>
                        </Zoom>
                      </div>
                    </div>
                  </div>


                </div>

              </div>
              <Footer />
            </div>
            

        )

        ;
  }
}

export default Dashboard;
