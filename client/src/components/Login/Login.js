import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            referrerRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.email);
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        })
            .then(data => data.json())
            .then(response => {

                localStorage.setItem('isAuthenticated', true);

                if (response !== 'undefined') {
                    this.setState(() => ({ referrerRedirect: true }));
                }
            })
            //.catch(err => console.log(err.message));
            // .then(response => {
            //     console.log(response)

            //     // Save token to local storage

            //     /*const { token } = res.data;
            //     // Set token to local storage
            //     localStorage.setItem("jwtToken", token);
            //     // Set token to auth header
            //     setAuthToken(token);
            //     // Decode token to get user data
            //     const decoded = jwt_decode(token);
            //     // Set current user
            //     dispatch(setCurrentUser(decoded));*/

            //     if (!response.data.errmsg) {
            //         // this.setState({
            //         //     //redirect to dashboard page
            //         //     loggedIn: true,
            //         //     fireRedirect: true
            //         // });
            //         this.setState(() => ({ referrerRedirect: true }));
            //     } else {
            //         console.log("Email or Password incorrect, please try again.");
            //         this.setState({
            //             //redirect to dashboard page
            //             loggedIn: false,
            //             fireRedirect: true
            //         });
            //     }
            // })
            .catch(errors => {
                console.log(`Login error: ${errors}`);
            });
    }

    render() {

        const {from} = this.props.location.state || { from: { pathname: '/dashboard'} };
        const {referrerRedirect} = this.state;
        if (referrerRedirect)
            return <Redirect to={from}/>;
        return (
            <div>
                <h2>You must be logged in to access this page</h2>
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
            </div>
        );
    }
}
export default Login;