//Refer to https://reacttraining.com/react-router/web/example/auth-workflow
import React from 'react'
import { withRouter } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

class Authenticator extends React.Component {

    constructor(props){
        super(props);
        this.state = { showRegistration: false };
        this.switchState = this.switchState.bind(this);
    }

    switchState(loggedIn) {
        this.setState({ loggedIn });
    }

    render() {
        this.state.loggedIn = this.state;
        return (
            <div>
                { this.state.showRegistration ? <Register/> : <Login />}
                <div>
                    <p className="btn btn-primary col-1 col-mr-auto" onClick={() => this.switchState(true)}>Login In</p>
                    <p className="btn btn-primary col-1 col-mr-auto" onClick={() => this.switchState(false)}>Register</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Authenticator)

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '100px',
        paddingBottom: '10px',
        cursor: 'pointer',
        borderBottom: '2px solid transparent'
    },
    underline: {
        borderBottomColor: '#ddd'
    }
}