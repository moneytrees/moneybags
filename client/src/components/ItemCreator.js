import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
require('dotenv').config({ path: '../.env' });

class ItemCreator extends Component {

    constructor(props){
        super(props);
        this.state = { public_key: null };
    }

    componentDidMount() {
        if(!this.state.public_key)
            fetch('/api/get_public_key')
                .then(data => data.json())
                .then(public_key => { this.setState(public_key)});
    }

    handleOnSuccess(token, metadata) {
        fetch('/api/get_access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token: token, metadata: metadata }),
        });
    }
    handleOnExit() {
        // handle the case when your user exits Link
    }
    render() {
        if (this.state.public_key) {
            return (
                <PlaidLink
                    clientName="Moneytrees"
                    env="sandbox"
                    apiVersion={'v2'}
                    product={["auth", "transactions"]}
                    webhook="https://requestb.in"
                    publicKey={this.state.public_key}
                    onExit={this.handleOnExit}
                    onSuccess={this.handleOnSuccess}>
                    Open Link and connect your bank!
                </PlaidLink>
            )
        } else {
            return null;
        }
    }
}

export default ItemCreator;