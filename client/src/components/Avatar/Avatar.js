import React, { Component } from "react";
import Happy from "../../imgs/bigFootSVGs/happyBigFoot.svg";
import Neutral from "../../imgs/bigFootSVGs/neutralBigFoot.svg";
import Mad from "../../imgs/bigFootSVGs/madBigFoot.svg";
import "./Avatar.css";

class Avatar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageArray: [Happy, Neutral, Mad],
      currentImageIndex: 1,
      currentAltDesc: "neutral big foot avatar"
    }
  }

  componentDidMount() {

      fetch("/api/getLatestCashFlow", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: localStorage.getItem("user_email") })
      }).then(data => data.json())
      .then(response => {


        setTimeout(() => {

          switch (response) {
            case "positive":
              this.setState({
                currentImageIndex: 0,
                currentAltDesc: "happy big foot avatar"
              });
              break;
            case "negative":
              this.setState({
                currentImageIndex: 2,
                currentAltDesc: "mad big foot avatar"
              })
              break;

            case "neutral":
              this.setState({
                currentImageIndex: 1,
                currentAltDesc: "neutral big foot avatar"
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
        <img className="avatar-img" src={this.state.imageArray[this.state.currentImageIndex]} alt={this.state.currentAltDesc} />
      </div>
    )
  }
}

export default Avatar