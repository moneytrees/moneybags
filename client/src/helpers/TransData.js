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