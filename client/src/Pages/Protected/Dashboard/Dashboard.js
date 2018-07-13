import React, { Component } from "react";

import neutralBigFoot from "../../../imgs/bigFootSVGs/neutralBigFoot.svg";
import CashFlow from "../../../components/UserDashboard/CashFlow";
import TotalSpending from "../../../components/UserDashboard/TotalSpending";
import TransactionDetail from "../../../components/UserDashboard/TransactionDetail";
import Achievement from "../../../components/Achievements";
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
    .get("/api/getNewUserAchievements")
    .then(response => {

      console.log(response.data);

        response.data.forEach((item)=>{

          setTimeout(()=>{
            toast(<AchvToast title= {item.name} desc ={item.desc}/>, { type: toast.TYPE.INFO, autoClose: 5000 });
          }, 1500);
          
        });
        // this.setState({
        //   newAchvArr: response.data
        // })
    })
    .catch(errors => {
        console.log(`error: ${errors}`);
    });
  }


  render() {
    return (


      <div className="background">

        <ToastContainer/>
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
                  <Animated animationIn="slideInDown" animationOut="zoomOutDown" isVisible={true}>
                    
                      {/* <h1> BigFoot Avatar </h1> */}
                      <img className="neutralBigFoot" src={neutralBigFoot} alt="logo" />
                    
                    </Animated>
                  </div>
                


                <div className="col-md-8 text-center">

                <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}>
                  <Card>
                    <h1 id= "dashboardTitle"> Achievements </h1>

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

            <hr>
            </hr>
            <Animated animationIn="fadeInUp" animationOut="zoomOutDown" isVisible={true}>
              <div className="row">
                <div className="col-12">
                  {/* <div className="container"> */}
                  <div className="ProgressBar">
                    <Card>
                      <h1 id= "dashboardTitle"> Progress Bar </h1>
                      <ProgressBar />

                    </Card>

                  </div>
                  {/* </div> */}
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
                    <h1 id= "dashboardTitle"> Cash Flow </h1>
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

            <hr>

            </hr>

            <div className="TransactionDetail">

              <div className="row">
                <div className="col-md-8">

                <Zoom>
                  <Card>
                    <h1 id= "dashboardTitle"> Transaction Detail</h1>


                    <TransactionDetail />

                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                </Zoom>

                {/* </Animated> */}



   

                </div>

                <div className="col-md-4">
                <Fade right>
                {/* <Animated animationIn="slideInRight" animationOut="zoomOutDown" isVisible={true}> */}
                  <Card>
                    <h1 id= "dashboardTitle"> Total Spending</h1>
                    <TotalSpending />


                    {/* <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    </CardBody> */}
                  </Card>
                {/* </Animated> */}
                </Fade>

                {/* </Animated> */}

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
