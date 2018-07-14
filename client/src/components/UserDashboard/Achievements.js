import React, { Component } from 'react';
import axios from "axios";
import Trophy from "../../imgs/goldTrophy.png";
import greyTrophy from "../../imgs/greyTrophy.png";


class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = { achvArray: [] };
    }

    componentDidMount() {

        axios.get("/api/getAllAchievements", {
            params: {
                email: localStorage.getItem("user_email")
            }
          })
            .then(response => {
                this.setState({
                    achvArray: response.data
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
                        {this.state.achvArray.map(function (item, i) {
                            return (

                                <div className="col-md-4">
                                    <h3> {item.name}</h3>
                                        {console.log(item)}

                                   {/* <img src={Trophy}/> */}
                                   <img src={item.unlocked ? Trophy:greyTrophy}/>

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