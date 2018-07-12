import React, { Component } from "react";
import Login from "../../../components/Login";

class UserLogin extends Component {

  constructor(props) {
      super(props);
      this.getFeedback = this.getFeedback.bind(this);
  }

  getFeedback() {
      if(this.props.location.state){
          const { from } = this.props.location.state;
          let userfeedback  = '';
          if(from) {
              switch(from.pathname){
                  case '/':
                  case '/login':
                  case '/register':
                      userfeedback = '';
                      break;
                  default:
                      userfeedback = 'You must be logged in to access this page';
              }
          }

          userfeedback = this.props.location.state.feedback || userfeedback;
          if(userfeedback.includes('registered successfully')) userfeedback += " Confirm your signing-on:";

          return  <h2>{userfeedback}</h2>;
      }
  }
  render() {
    return (
      <div>
        <h1>Money Tree: User Login</h1>
          {this.getFeedback()}
        <Login location={this.props.location || null}/>
      </div>
    );
  }
}

export default UserLogin;
