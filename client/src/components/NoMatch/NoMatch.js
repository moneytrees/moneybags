import React, { Component } from "react";
import "./NoMatch.css";
import { Jumbotron } from 'reactstrap';

class NoMatch extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="noMatch">
                    <h1>
                        <span role="img" aria-label="Detective" className="emoji"> 🕵️‍ 404 Page Not Found</span>
                    </h1>
                  
                    
                </Jumbotron>
            </div>
        )
    }
}

export default NoMatch;

