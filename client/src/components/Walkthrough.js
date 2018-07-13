import React, { Component } from 'react'

export default class Walkthrough extends Component {
    render() {
        return (
            <div>
                <div id="banner">
                    <h1>Plaid Example Walkthrough</h1>
                    <p id="intro">
                        This is an example application that walks through integrating Plaid Link using the API to retrieve Auth and Transaction data.
                    </p>
                    <p id="steps">
                        Great - you just created an Item! The server was successfully able to exchange the public_token for an access_token. Below
                        are a few options - you can get account data, retrieve information about the Item itself, or pull transaction
                        data.
                    </p>
                </div>

                <div id="container">
                    <p>
                        Click the button below to open a list of Institutions - after you select one, you'll be guided through an authentication
                        process. The public_token will be passed back to the example server, which will then exchange it for an access
                        token and log it to your console.
                    </p>
                </div>
            </div>
        );
    }
}

