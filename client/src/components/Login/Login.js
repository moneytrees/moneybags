import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Auth from "../../helpers/Passport"

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = this.state = {
            name: '',
            email: '',
            password: '',
            loggedIn: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    //handleChange(key, value) {
        this.setState({
            [event.target.name]: event.target.value
        });
        //this.setState({ [key]: value });
    }

    handleSubmit(event) {
        console.log(this.state.email);
        event.preventDefault();

        Auth.signIn(this.state.email, this.state.password)
            .then(user => {
                this.props.history.push('/');
            })
            .catch(err => console.log('error signing in...: ', err))
    }

    render() {
        return (
            <div className="LoginForm">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input
                                className="form-input"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="password">
                                Password:{" "}
                            </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input
                                className="form-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-7" />
                        <button className="btn btn-primary col-1 col-mr-auto" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)

//export default Login;
