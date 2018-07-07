const plaid = require('plaid');
require('dotenv').config();

class PlaidController {

    constructor() {
        //TODO check if there's a public key already saved for the logged in user
        this.client = new plaid.Client(
            process.env.PLAID_CLIENT_ID,
            process.env.PLAID_SECRET,
            process.env.PLAID_PUBLIC_KEY,
            plaid.environments[process.env.PLAID_ENV]
        );
    }

    set metaData(metadata){
        console.log(metadata);
        this.publicToken = metadata.public_token;
        this.session_id = metadata.link_session_id;
        this.meta_data = metadata;
    }

    get metaData() {
        return this.meta_data;
    }

    set publicToken(token) {
        this.public_token = token;
    }

    get publicToken() {
        return this.public_token;
    }

    set accessToken(token) {
        this.access_token = token;
    }

    get accessToken() {
        return this.access_token;
    }

    set transactionDaysAgo(number) {
        this.tStartDate = moment().subtract(number, 'days').format('YYYY-MM-DD');
        this.tEndDate = moment().format('YYYY-MM-DD');
    }

    get transactionRange() {
        return {start: this.tStartDate, end: this.tEndDate };
    }

    async getAccessToken() {
        //TODO: check database for existing access token for the currently signed-in user
        const data = await this.client.exchangePublicToken(this.publicToken)
            .then( response => {
                this.accessToken = response.access_token;
                return response;
            })
            .catch((err) => err);

        return data;
    }

    async getAccountInfo() {
        //TODO: check database for existing access token for the currently signed-in user
        const data = await this.client.getAuth(this.accessToken)
                .then( response => response )
                .catch((err) => err);

        return data;
    }

    async getItem() {
        //TODO: check database for existing access token for currently requested item
        const data = await this.client.getItem(this.accessToken)
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

    async getTransactions() {
        __plaidClient.getTransactions(this.accessToken, {min, max} = this.transactionRange, { count: 250, offset: 0} )
            .then(response => {
                response.transactions.forEach( item => {
                    console.log(item.category);
                });
                return response;
            })
            .catch((err) => err);
    }
}

module.exports = PlaidController;