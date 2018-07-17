import React, { Component } from "react";
import "./Userlogin.css";
import Register from "../../../components/Register";
import Footer from "../../../components/Footer"

class UserRegister extends Component {
    render() {
        return (
            <div>
            <div className="register">
                <Register />
            </div>
                <Footer/>
            </div>
        );
    }
}

export default UserRegister;