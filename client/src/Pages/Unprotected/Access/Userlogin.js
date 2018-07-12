import React, { Component } from "react";
import Login from "../../../components/Login";

class UserLogin extends Component {
  render() {
    return (
      <div>
        <h1>Money Tree: User Login</h1>

        <Login location={this.props.location || null}/>
      </div>
    );
  }
}

export default UserLogin;
