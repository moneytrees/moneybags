import React, { Component } from 'react';
import Trophy from "../../imgs/goldTrophy.png";
import greyTrophy from "../../imgs/greyTrophy.png";

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = { loginAchvArray: [], cashFlowAchvArray: [] };
        this.sortThrophies = this.sortThrophies.bind(this);

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
                response.forEach((item) => {
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
                });

            })
            .catch(errors => {
                console.log(`error: ${errors.message}`);
            });
    }


    render() {
        return (
            <div className="col-md-12">
                <div className="fluid-container">
                    <div className="row">
                        {this.sortThrophies(this.state.loginAchvArray).map(function (item) {
                            const { id, unlocked, name, desc } = item;
                            return (
                                <div className="col-md-3" key={id}>
                                    <img className="trophyPic" src={unlocked ? Trophy : greyTrophy} alt={unlocked ? "Gold Unlocked Achievement Trophy" : "Monochrome Locked Achievement Trophy"}/>
                                    <h3 className="itemName">{name}</h3>
                                    <span className="itemDesc"> {desc}</span>
                                </div>
                            );
                        })}

                        {this.sortThrophies(this.state.cashFlowAchvArray).map(function (item) {
                            const { id, unlocked, name, desc } = item;
                            return (
                                <div className="col-md-3" key={id}>
                                    <img className="trophyPic" src={unlocked ? Trophy : greyTrophy} alt={unlocked ? "Gold Unlocked Achievement Trophy" : "Monochrome Locked Achievement Trophy"}/>
                                    <h3 className="itemName"> {name}</h3>
                                    <span className="itemDesc"> {desc}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;