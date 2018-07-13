import React, { Component } from 'react';
import { RadialChart } from 'react-vis/dist';
import axios from 'axios';
import '../../react-vis.css';

export default class TotalSpending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { amount: 100, date: '2018-06-12', category: 'Recreation' },
                { amount: 100, date: '2018-07-01', category: 'Food and Drink' },
                { amount: 100, date: '2018-07-05', category: 'Home' },
                { amount: 100, date: '2018-07-05', category: 'Auto' },
                { amount: 100, date: 'some date', category: 'Healthcare' },
                { amount: 100, date: 'some date', category: 'Investments' }
            ]
        };
    }

    componentDidMount() {
        let transactions = [];
        axios
            .post('/dbRoute') // hit route to DB
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

        expenses.sort(function (a, b) {
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
        let colors = ['#4d4d4d', '#5da5da', '#faa43a', '#60bd68', '#f17cb0', '#b2912f', '#b276b2', '#decf3f'];
        for (let i = 0; i < expenses.length; i++) {
            data.push({ angle: expenses[i].amount, label: expenses[i].category, color: colors[i] });
        }
        if (misc / total > 0.05) {
            data.push({ angle: misc, label: 'Misc' });
        }

        return (
            <div className="pieChart">
                <RadialChart
                    data={data[0].angle === '' ? data = [{ angle: 1 }] : data}
                    colorType={'literal'}
                    showLabels={true}
                    labelsRadiusMultiplier={1.3}
                    labelsStyle={{ fontSize: 14 }}
                    radius={150}
                    width={400}
                    height={400} />
            </div>
        )
    }
}
