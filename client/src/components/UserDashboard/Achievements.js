import React, { Component } from 'react';
import axios from "axios";
import Trophy from "../../imgs/goldTrophy.png";
import greyTrophy from "../../imgs/greyTrophy.png";



class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = { loginAchvArray: [], cashFlowAchvArray: [] };
        this.sortThrophies=this.sortThrophies.bind(this);
        
    }

    sortThrophies(tArray) {
        return tArray.sort((a, b) => {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
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

                response.data.forEach((item) => {
                    if (item.id.length < 16) {
                        tempLogin.push(item);
                    }
                    else {
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
            <div className="col-md-12">
                <div className="fluid-container">
                    <div className="row">
                        {this.sortThrophies(this.state.loginAchvArray).map(function (item, i) {
                            return (

                                <div className="col-md-2">
                                    <img className="trophyPic" src={item.unlocked ? Trophy : greyTrophy} />
                                    <h3 className="itemName"> {item.name}</h3>
                                    <span className="itemDesc"> {item.desc}</span>

                                </div>

                            );
                        })
                        }
                        

                     
 
                        {this.sortThrophies(this.state.cashFlowAchvArray).map(function (item, i) {
                            return (
                                <div className="col-md-2">

                                    <img className="trophyPic" src={item.unlocked ? Trophy : greyTrophy} />
                                    <h3 className="itemName"> {item.name}</h3>


                                    {/* <span className="itemDesc"> {item.desc}</span> */}
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