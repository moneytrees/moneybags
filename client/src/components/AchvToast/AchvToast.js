import React, { Component } from "react";
// import Trophy from "../images/trophy.jpg";
import "./AchvToast.css";

class AchievementToast extends Component {

  constructor(props){
    super(props);
    this.props = props;
    
}

  render() {
    return (
      
      <div>
        <h3> {this.props.title} </h3>
       {/* <img className="trophy" src={Trophy}/>  */}
        <p> {this.props.desc} </p>
        
      </div>
    )
  }
}

export default AchievementToast