const plaid = require('plaid');
require('dotenv').config();

class PlaidController {

    constructor(metadata) {
        //TODO check if there's a public key already saved for the logged in user
        this.client = new plaid.Client(
            process.env.PLAID_CLIENT_ID,
            process.env.PLAID_SECRET,
            process.env.PLAID_PUBLIC_KEY,
            plaid.environments[process.env.PLAID_ENV]
        );
        this.public_token = metadata.public_token;
        this.access_token = metadata.access_token;
    }

    set accessToken(token) {
        this.access_token = token;
    }

    get accessToken() {
        return this.access_token;
    }

    async getAccessToken() {
        //Only used for rotating access tokens and public tokens, DB should be checked for this data first
        const data = await this.client.exchangePublicToken(this.public_token)
            .then( response => response)
            .catch((err) => err);

        return data;
    }
    async getAccountInfo(access_token) {
        //TODO: check database for existing access token for the currently signed-in user
        const data = typeof access_token === 'undefined' || access_token ?
            await this.getAccessToken()
                .then( authdata => {
                    this.accessToken = authdata.access_token;
                    return this.client.getAuth(authdata.access_token)
                        .then( response => response )
                        .catch((err) => err);
                })
            : await this.client.getAuth(access_token)
                .then( response => response )
                .catch((err) => err);

        return data;
    }

    async getItem(access_token) {
        //TODO: check database for existing access token for currently requested item
        const data = typeof access_token === 'undefined' || access_token ?
            await this.getAccessToken()
                .then( authdata => {
                    this.accessToken = authdata.access_token;
                    return this.client.getItem(this.accessToken)
                        .then( itemResponse => {
                            console.log('item info');
                            console.log(itemResponse);
                            return this.client.getInstitutionById(itemResponse.item.institution_id)
                                .then(institutionResponse => {
                                    //THIS MAY NOT BE NECESSARY
                                    console.log('institution info');
                                    console.log(institutionResponse);
                                    return { item: itemResponse, institution: institutionResponse }
                                })
                                .catch((err) => err);
                        } )
                        .catch((err) => err);
                })
            : await this.client.getItem(access_token)
                .then( itemResponse => {
                    console.log('item info');
                    console.log(itemResponse);
                    return this.client.getInstitutionById(itemResponse.item.institution_id)
                        .then(institutionResponse => {
                            //THIS MAY NOT BE NECESSARY
                            console.log('institution info');
                            console.log(institutionResponse);
                            return { item: itemResponse, institution: institutionResponse }
                        })
                        .catch((err) => err);
                } )
                .catch((err) => err);

        return data;
    }
}

module.exports = PlaidController;