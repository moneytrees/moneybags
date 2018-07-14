import React, { Component } from "react";
import neutralBigFoot from "../../../imgs/bigFootSVGs/neutralBigFoot.svg";
import Avatar from "../../../components/Avatar";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievements from "../Achievements";
import ProgressBar from "../../../components/ProgressBar"
import { Card, CardImg } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import AchvToast from "../../../components/AchvToast"
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css";
import axios from "axios";
import { Animated } from "react-animated-css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



class Dashboard extends Component {

  constructor(props){
        super(props);
        this.state = { newAchvArr: [] };
  }

  componentDidMount(){
      axios
          .get("/api/getNewUserAchievements",{params:{email: localStorage.getItem("user_email")}})
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
                  .delete("/api/deleteNewAchievements",{params:{email: localStorage.getItem("user_email")}})
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

<<<<<<< HEAD
      

        {/* <Baseline /> */}
        {/* <Button color="danger">Danger!</Button> */}
=======
        <ToastContainer/>

        <h1>
          Money Tree: User Dashboard
        </h1>
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929
        <div className="col-12">
          <div className="container">

            <div className="Acheivement">



<<<<<<< HEAD
              
                 
                    <img className="neutralBigFoot" src={neutralBigFoot} alt="logo" />
=======
              <div className="row">
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929

               
                  <div className="col-md-4">
                  <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>
                    
                      {/* <h1> BigFoot Avatar </h1> */}
                      <Avatar/>
                    
                    </Animated>
                  </div>
                


<<<<<<< HEAD
    </CardBody> */}
                 
                </div>
                <div className="col-md-8 text-center">
                  <Card>
                    <h1> Achievements </h1>

                    <Achievements />
=======
                <div className="col-md-8 text-center">
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929

                <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}>
                  <Card>
                    <h1 id= "dashboardTitle"> Achievements </h1>

                    <Achievements />

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
                      <h1 id= "dashboardTitle"> Progress Bar </h1>
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
                <Zoom>
                  <Card>
<<<<<<< HEAD
                  
                    <CashFlow />


                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
=======
                    <h1 id= "dashboardTitle"> Cash Flow </h1>
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929
                  </Card>
               
               </Zoom>
                </div>
              </div>
            </div>

            <hr>

            </hr>

            <div className="TransactionDetail">

              <div className="row">
                <div className="col-md-8">
<<<<<<< HEAD
                  <Card>
                    

                    <TransactionDetail />


=======
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929

                <Zoom>
                  <Card>
                    <h1 id= "dashboardTitle"> Transaction Detail</h1>


                    <TransactionDetail />
                  </Card>
                </Zoom>
                </div>

                <div className="col-md-4">
                <Fade right>
                  <Card>
<<<<<<< HEAD
                   
                    <TotalSpending />

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
=======
                    <h1 id= "dashboardTitle"> Total Spending</h1>
                    <TotalSpending />
>>>>>>> df2995d84e4e57dcb1df3f0f750b5a4304321929
                  </Card>
                </Fade>
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
