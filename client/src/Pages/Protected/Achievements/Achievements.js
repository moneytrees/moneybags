import React, { Component } from 'react';

class Achievements extends Component {

    constructor(props) {
        super(props);
        this.state = { loginAchvArray: [], cashFlowAchvArray: [] };
    }

    componentDidMount() {

        fetch("/api/getAllAchievements", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: localStorage.getItem("user_email") })
        })
            .then(data => data.json())
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
                });

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