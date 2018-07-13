import React, { Component } from "react";
// import Trophy from "../images/trophy.jpg";
import "./AchvToast.css";

class AchievementToast extends Component {

  render() {
    return (
      
      <div>
        <h3> Achievement Title </h3>
       <img className="trophy" src={Trophy}/> 
        <p> Description of Achievement </p>
        
      </div>
    )
  }
}

export default AchievementToast