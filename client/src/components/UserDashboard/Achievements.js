import React, { Component } from 'react';
import axios from "axios";


class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = { achvArray: [] };
    }

    componentDidMount() {

        axios
            .get("/api/getAllAchievements")
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