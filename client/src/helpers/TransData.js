import axios from "axios";

// import React from 'react';


// export default class TransData {
//   // Initializing important variables
//   constructor() {
//     this.login = this.login.bind(this);
//   }
//   grabInst() {
//     console.log("pull Inst fired");
//     fetch("/api/get_inst", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ user_id: "5b489aacc88f08965778d123" })
//     })
//       .then(data => data.json())
//       .then(response => console.log(response))
//       .catch(err => console.log(err.message));
//     console.log("LOLLLLLL");
//   }
// }
import React, { Component } from 'react';

class TransData extends Component {



  render() {

    fetch("/api/get_inst", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
    })
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => console.log(err.message));

    return (
      <div>





      </div>
    );
  }
}

export default TransData;