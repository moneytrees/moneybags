import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'

require('dotenv').config({ path: '../.env' });

class ItemCreator extends Component {

    constructor(props){
        super(props);
        this.state = { public_key: null,
            token:null
         };


    }





    componentDidMount() {
        if(!this.state.public_key)
            fetch('/api/get_public_key')
                .then(data => data.json())
                .then(public_key => { this.setState(public_key)})
                .catch(err => console.log(err.message));;
    }

    handleOnSuccess(token, metadata) {
        fetch('/api/get_access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token: token, metadata: metadata }),
        }).then(console.log(metadata))
        .catch(err => console.log(err.message));
    }


    call() {
        const response = fetch('/api/accounts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data=> console.log(data)  )
        .catch(err => err.message);
        console.log("click");
    }
    tran() {
        fetch('/api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data=>console.log(data))
        .catch(err => console.log(err.message));
        console.log("click")
    }
    // handleOnEvent(eventname, metadata) {
    //     console.log('link: user event', eventname, metadata);
    //   }


    render() {
        
        if (this.state.public_key) {
            return (

                <div>
                    <button onClick={this.call}>
                        click me for account check console log
                        </button>
                        <button onClick={this.tran}>
                        click me for account check console log
                        </button>
                <PlaidLink
                    clientName="Moneytrees"
                    env="sandbox"

                    apiVersion={'v2'}
                    product={["auth", "transactions"]}
                    onEvent={this.handleOnEvent}
                    webhook="https://requestb.in"
                    publicKey={this.state.public_key}
                    onExit={this.handleOnExit}
                    onSuccess={this.handleOnSuccess}>
                    Open Link and connect your bank!
                </PlaidLink>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ItemCreator;