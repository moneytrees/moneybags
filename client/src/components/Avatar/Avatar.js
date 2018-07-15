import React, { Component } from "react";
import Happy from "../../imgs/bigFootSVGs/happyBigFoot.svg";
import Neutral from "../../imgs/bigFootSVGs/neutralBigFoot.svg";
import Mad from "../../imgs/bigFootSVGs/madBigFoot.svg";
import "./Avatar.css";

export class Avatar extends Component {

  constructor(props){
    super(props);
    this.toastId = null;
    this.state = {
        imageArray : [Happy, Neutral, Mad ],
        currentImageIndex: 1
    }
  }

    componentDidMount(){


      axios
      .get("/api/getLatestCashFlow", {params:{email: localStorage.getItem("user_email")}})
      .then(response => {

        setTimeout(()=>{

          switch (response.data){
            case "positive":
              this.setState({
                currentImageIndex: 0
              });
              break;
            case "negative":
              this.setState({
                currentImageIndex: 2
              })
              break;
  
            case "neutral":
              this.setState({
                currentImageIndex: 1
              })
              break;
            default:
              break;
          }
          
        }, 1000);

      });

    }


  render() {
    return (
      
      <div >
        <img className ="avatar-img" src={this.state.imageArray[this.state.currentImageIndex]} />
      </div>
    )
  }
}

export default Avatar