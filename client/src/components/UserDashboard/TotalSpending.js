import React, { Component } from 'react';
import { RadialChart } from 'react-vis/dist';
import axios from 'axios';
import '../../react-vis.css';
import "./UserDashboard.css";
import '../../App.css';

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
        // fetch("/api/transactions", {
        //     method: "GET",
        // })
            
        //     .then(data => { console.log(data) })
        //     .catch(err => { console.log(err.message) });
    }


    render() {

        const { hoveredSection } = this.state;


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

        let colors = ['#77c9d4', '#015249', '#49a3e3', '#57bc90', '#e38949', '#a5a5af'];

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

                    labelsRadiusMultiplier={.8}
                    labelsStyle={{ fontSize: 10 }}

                    radius={150}
                    width={300}
                    height={300} />
            </div>

        );

    }
}
