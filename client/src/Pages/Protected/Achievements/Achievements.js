import React, { Component } from 'react';
import axios from "axios";


class Achievements extends Component {

    constructor(props) {
        super(props);
        this.state = { loginAchvArray: [], cashFlowAchvArray: [] };
    }

    componentDidMount() {

        axios.get("/api/getAllAchievements", {
            params: {
                email: localStorage.getItem("user_email")
            }
          })
            .then(response => {
               let tempLogin = [];
                let tempCash = [];
                console.log(response.data);

                response.data.forEach((item)=>{
                    if(item.id.length<16){
                        tempLogin.push(item);
                    }
                    else{
                        tempCash.push(item);
                    }
                })
                
                this.setState({
                    loginAchvArray: tempLogin,
                    cashFlowAchvArray: tempCash
                })

            })
            .catch(errors => {
                console.log(`error: ${errors}`);
            });
    }


    render() {
        return (
            <div className="col-12">
                <div className="fluid-container">
                    <div className="row">
                        {this.state.loginAchvArray.map(function (item, i) {
                            return (

                                <div className="col-md-4">
                                    <h3> {item.name}</h3>

                                    <img src="" />
                                    <span> {item.desc}</span>
                                </div>


                            );
                        })
                        }
                   
                        {this.state.cashFlowAchvArray.map(function (item, i) {
                            return (

                                <div className="col-md-4">
                                    <h3> {item.name}</h3>

                                    <img src="" />
                                    <span> {item.desc}</span>
                                </div>


                            );
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;