import React, { Component } from 'react';
import { RadialChart } from 'react-vis/dist';
import '../../react-vis.css';
import "./UserDashboard.css";
import '../../App.css';

export default class TotalSpending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { amount: 15, date: '2018-06-12', category: 'Recreation' },
                { amount: 15, date: '2018-07-01', category: 'Food & Drink' },
                { amount: 25, date: '2018-07-05', category: 'Home' },
                { amount: 10, date: '2018-07-05', category: 'Auto' },
                { amount: 15, date: 'some date', category: 'Healthcare' },
                { amount: 20, date: 'some date', category: 'Investment' }
            ]
        };
    }

    componentDidMount() {
        let transactions = [];
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

        let colors = ['#56CBF9', '#FF220C', '#F038FF', '#32E875', '#FFBD00', '#FF5400','#FF220C'];


        for (let i = 0; i < expenses.length; i++) {
            data.push({ angle: expenses[i].amount, 
                label: `${expenses[i].category} - ${expenses[i].amount}%`,
                color: colors[i] });
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

                    labelsRadiusMultiplier={1.25}
                    labelsStyle={{ fontSize: 12 }}
                
                   
                    radius={150}
                    width={350}
                    height={370} />
            </div>

        );

    }
}
