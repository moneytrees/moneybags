import React, { Component } from "react";
import "./Userlogin.css";
import Register from "../../../components/Register";

class UserRegister extends Component {
    render() {
        return (
            <div className="register">
                <Register />
            </div>
        );
    }
}

export default UserRegister;