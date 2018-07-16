const plaid = require('plaid');
const moment = require('moment');
require('dotenv').config();

class PlaidController {

    constructor() {
        this.public_key = process.env.PLAID_PUBLIC_KEY;
        this.secret = process.env.PLAID_SECRET;
        this.client_id = process.env.PLAID_CLIENT_ID;
        this.environment = plaid.environments[process.env.PLAID_ENV];
        this.client = new plaid.Client(
            this.client_id,
            this.secret,
            this.public_key,
            this.environment
        );
    }

    set metaData(metadata) {
        this.publicToken = metadata.public_token;
        this.session_id = metadata.link_session_id;
        this.institution = metadata.institution;
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

    holder(arg) {
        if (arg) {
            this.access_token = arg;
            this.accessToken
        } else {
            this.accessToken
        }
    }

    get accessToken() {
        return this.access_token;
    }

    set transactionDaysAgo(number) {
        this.tStartDate = moment().subtract(number, 'days').format('YYYY-MM-DD');
        this.tEndDate = moment().format('YYYY-MM-DD');
    }

    get transactionRange() {
        return { start: this.tStartDate, end: this.tEndDate };
    }

    getPublicKey() {
        return { public_key: this.public_key };
    }

    getInst() {
        let inst_test = this.institution
    }


    async getAccessToken() {
        return await this.client.exchangePublicToken(this.publicToken)
            .then(response => {
                this.accessToken = response.access_token;
                console.log('access token');
                console.log(this.accessToken);
                return response;
            })
            .catch((err) => err);
    }

    async getAccountInfo(res, req) {

        return await this.client.getAuth(this.accessToken)
            .then(response => response)
            .catch((err) => err);
    }


    async getItem() {

        return await this.client.getItem(this.accessToken)
            .then(itemResponse => {
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
            })
            .catch((err) => err);
    }
    async getItem() {

        return await this.client.getItem(this.accessToken)
            .then(itemResponse => {
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
            })
            .catch((err) => err);

    }

    async getTransactions() {
        const options = { count: 250, offset: 0 };
        return await this.client.getTransactions(this.accessToken, this.transactionRange.start, this.transactionRange.end, options)
            .then(res => {
                let transArr = [];
                res.transactions.forEach(item => {
                    transArr.push(item);
                });
                return transArr;
            })
            .catch((err) => err);
    }
}

module.exports = PlaidController;