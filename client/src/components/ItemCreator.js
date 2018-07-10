import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
require('dotenv').config({ path: '../.env' });

class ItemCreator extends Component {

    constructor(props){
        super(props);
        this.state = { public_key: null };
    }

    componentDidMount() {
        fetch('/api/get_public_key')
            .then(data => data.json())
            .then(public_key => { this.setState(public_key)});
    }

    handleOnSuccess(token, metadata) {
        console.log(token);
        /*fetch('/api/get_access_token',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: {
                public_token: process.env.PLAID_PUBLIC_KEY
            }
        })
            .then(response => response);*/
    }
    handleOnExit() {
        // handle the case when your user exits Link
    }
    render() {
        return (
            <PlaidLink
                clientName="Moneytrees"
                env="sandbox"
                apiVersion={'v2'}
                product={["auth", "transactions"]}
                publicKey={this.state.public_key}
                onExit={this.handleOnExit}
                onSuccess={this.handleOnSuccess}>
                Open Link and connect your bank!
            </PlaidLink>
        )
    }
}

export default ItemCreator;