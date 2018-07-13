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
import { ToastContainer, toast } from 'react-toastify';
import AchvToast from "../../../components/AchvToast"
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css";
import axios from "axios";


class Dashboard extends Component {

  constructor(props){
        super(props);
        this.state = { newAchvArr: [] };
  }

  componentDidMount(){
      axios
          .get("/api/getNewUserAchievements")
          .then(response => {

              let newAchvArr = response.data;

              setTimeout(()=>{

                  if (newAchvArr.length > 0) {


                      toast(<AchvToast title={newAchvArr[0].name} desc={newAchvArr[0].desc} />, { type: toast.TYPE.INFO, autoClose: 5000 });

                      let i = 1;


                      let toastInterval = setInterval(() => {

                          if (i >= newAchvArr.length) {
                              clearInterval(toastInterval);
                          }
                          else{
                              toast(<AchvToast title={newAchvArr[i].name} desc={newAchvArr[i].desc} />, { type: toast.TYPE.INFO, autoClose: 5000 });
                              i++;

                          }





                      }, 5500);
                  }


              }, 1500);

              console.log(newAchvArr);




              axios
                  .delete("/api/deleteNewAchievements")
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

        <ToastContainer/>

        <h1>

          Money Tree: User Dashboard
        </h1>

        {/* <Baseline /> */}
        {/* <Button color="danger">Danger!</Button> */}
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
