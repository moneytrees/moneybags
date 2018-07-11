/*
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'somethingtodowithpassport'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: ''};
    }

    componentDidMount() {
        Auth.currentUserInfo()
            .then(data => {
                this.setState({ user: data });
            })
            .catch(err => console.log('error: ', err))
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.user ? this.state.user.name : this.state.user }</h1>
                <Link to='/someroute' label='someroute'>Someroute</Link>
            </div>
        )
    }
}

class Someroute extends React.Component {
    render() {
        return (
            <div>
                <h1>Someroute</h1>
                <p onClick={() => {
                    Auth.signOut()
                        .then(() => {
                            this.props.history.push('/login')
                        })
                        .catch(() => console.log('Error, logging out...'))
                }}>Log Out</p>
            </div>
        )
    }
}

Container = withRouter(Container);
Someroute = withRouter(Someroute);

export { Container, Someroute }*/
