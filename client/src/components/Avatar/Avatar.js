import React, { Component } from "react";
import Happy from "../images/happy.png";
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

        this.setState({
            currentImageIndex: Math.floor(Math.random() *3)
        });
    }

    notify = () => {
      this.toastId = toast("Achievement GOT!", {type: toast.TYPE.INFO, autoClose: 5000 });
    }

    // update = () => {
    //   toast.update(this.toastId, 
    //     { 
    //       render: <Avatar/>,
    //       type: toast.TYPE.INFO, 
    //       autoClose: 5000 
    //     });
    // }


  render() {
    return (
      
      <div >
        <button className="toast-button" onClick={this.notify}>Notify !</button>
        <button className="toast-button" onClick={this.update}>Update !</button>

        <ToastContainer/>
        
      </div>
    )
  }
}

export default ListItem