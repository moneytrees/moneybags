import React, { Component } from "react";
import Happy from "./imgs/bigFoothappyBigFoot.png";
import Neutral from "../images/neutral.png";
import Sad from "../images/sad.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AchievemntToast } from "../ach-toast/ach-toast.js";


export class ListItem extends Component {

  toastId = null;

    state = {
        imageArray : [Happy, Neutral, Sad ],
        currentImageIndex: 1
    }

    componentDidMount(){

      //make ajax call to route

        this.setState({
            currentImageIndex: Math.floor(Math.random() *3)
        });
    }


  render() {
    return (
      
      <div >
        <button className="toast-button" onClick={this.notify}>Notify !</button>
        <button className="toast-button" onClick={this.update}>Update !</button>}
        <ToastContainer/>
      </div>
    )
  }
}

export default ListItem