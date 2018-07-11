import React from 'react'
import {
    withRouter,
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom'
import { Auth } from 'aws-amplify'

import Authenticator from './Authenticator'
import {
    Container,
    Someroute
} from '../Pages/Container'

class PrivateRoute extends React.Component {
    state = {
        loaded: false,
        isAuthenticated: false
    }
    componentDidMount() {
        this.authenticate()
        this.unlisten = this.props.history.listen(() => {
            Auth.currentAuthenticatedUser()
                .then(user => console.log('user: ', user))
                .catch(() => {
                    if (this.state.isAuthenticated) this.setState({ isAuthenticated: false })
                })
        });
    }
    componentWillUnmount() {
        this.unlisten()
    }
    authenticate() {
        Auth.currentAuthenticatedUser()
            .then(() => {
                this.setState({ loaded: true, isAuthenticated: true })
            })
            .catch(() => this.props.history.push('/auth'))
    }
    render() {
        const { component: Component, ...rest } = this.props
        const { loaded , isAuthenticated} = this.state
        if (!loaded) return null
        return (
            <Route
                {...rest}
                render={props => {
                    return isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/auth",
                            }}
                        />
                    )
                }}
            />
        )
    }
}

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/auth' component={Authenticator} />
            <PrivateRoute path='/route1' component={Someroute} />
            <PrivateRoute path='/' component={Container} />
        </Switch>
    </Router>
)

export default Routes