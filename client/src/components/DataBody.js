import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import axios from 'axios';

export default class DataBody extends Component {
    state = {
        transactions: [
            {
                amount: '',
                category: ''
            }
        ]
    };
    
    componentDidMount() {
        let transactions = [];
        axios
            .post('/transactions')
            .then((res) => {
                res.data.forEach((el) => {
                    transactions.push({
                        amount: el.amount,
                        category: el.category[0]
                    });
                });
                this.setState({
                    transactions
                });
            }).catch(err => console.log(err));
    }
    render() {
        
        let expenses = this.state.transactions;
        let duplicate;
        do {
            duplicate = false;
        for (let i = 0; i < expenses.length; i++) {
            for (let j = 0; j < expenses.length; j++) {
                if (j !== i) {
                    if (expenses[i].category === expenses[j].category) {
                        let total = expenses[i].amount + expenses[j].amount;
                        let newExp = {
                            amount: total,
                            category: expenses[i].category
                        };
                        expenses.splice(i, 1, newExp);
                        expenses.splice(j, 1);
                        duplicate = true;
                    }
                }
            }
        }
    } while (duplicate);

        expenses.sort(function(a, b) {
            return a.amount - b.amount;
        });

        let total = 0;
        let misc = 0;
        for (let i = expenses.length - 1; i >= 0; i--) {
            total += expenses[i].amount;
            if ((expenses[i].amount / total) < 0.05) {
                misc += expenses[i].amount;
                expenses.splice(i, 1);
            }
        }
        let data = [];
        for (let i = 0; i < expenses.length; i++) {
            data.push({angle: expenses[i].amount, label: expenses[i].category});
        }
        data.push({angle: misc, label: 'Misc'});
        return (
            <div>
                <div id="get-accounts-data"></div>
                <div id="get-item-data"></div>
                <div id="get-transactions-data">
                <RadialChart
                    data={data[0].angle === '' ? data = [{angle: 1}] : data}
                    showLabels={true}
                    width={300}
                    height={300} />
                </div>
            </div>
        )
    }
}
