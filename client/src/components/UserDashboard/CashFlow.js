import React, { Component } from 'react';
import '../../App.css';
import './UserDashboard.css';
import '../../react-vis.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis/dist';
import regression from 'regression';
import OneYear from './OneYear';
import FiveYears from './FiveYears';
import TenYears from './TenYears';
import TwentyYears from './TwentyYears';
import LoanCalculator from './LoanCalculator';
import { Button } from 'reactstrap';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const ITEMS = [
    { title: 'Current Cash Flow', color: 'green' },
    { title: 'Current Cash Flow Trend', color: 'blue' },
    { title: 'Trend w/Optional Purchase', color: 'red' }
];
export default class CashFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [{ amount: 1, date: Date.now() }],
            startingBalance: 0,
            transactionsLength: '',
            regressionEquation: '',
            regressionEquation2: '',
            regressionEquation3: '',
            regLineData: [],
            regLineData2: [],
            dataSet: [],
            dataSet2: [],
            selectedTimeScaleInMonths: 1,
            compare: false,
            purchaseData: '',
            balance: 0
        };

        this.calculate = this.calculate.bind(this);
        this.calculatePurchaseOverInterval = this.calculatePurchaseOverInterval.bind(this);
        this.timeScaleHandler = this.timeScaleHandler.bind(this);
        this.getPurchaseData = this.getPurchaseData.bind(this);
    }

    componentDidMount() {
        let balance = 0;
        fetch("/api/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
        })
            .then(data => data.json())
            .then(response => {
                balance = parseInt(response.balances[0].current, 10);
            })
            .catch(err => console.log(err.message));

        fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
        })
            .then(data => data.json())
            .then(response => {
                const currentState = this.state;
                currentState.transactions = response;
                currentState.transactionsLength = response.length;
                currentState.balance = balance;
                currentState.startingBalance = balance;
                this.setState({ currentState });
            }).then(() => {
                const transactions = this.state.transactions.reverse();
                let dataSet = [];
                let regressionSet = [];
                let xPointCoord;
                let yPointCoord = this.state.balance;
                for (let i = transactions.length - 1; i >= 0; i--) {
                    xPointCoord = 30 - Math.round((Date.now() - new Date(transactions[i].date)) / 86400000);
                    yPointCoord += transactions[i].amount;
                    dataSet.push({ x: xPointCoord, y: yPointCoord });
                    regressionSet.push([xPointCoord, yPointCoord]);
                }
                dataSet.reverse().push({ x: 30, y: this.state.balance });
                regressionSet.push([30, this.state.balance]);

                const result = regression.linear(regressionSet);

                const regLineData = [{ x: 0, y: result.equation[1] },
                { x: 30, y: 30 * result.equation[0] + result.equation[1] }];

                const currentState = this.state;
                currentState.regressionEquation = result;
                currentState.regLineData = regLineData;
                currentState.dataSet = dataSet;
                this.setState({ currentState });

                let currentCashFlow;
                if (result.equation[0] >= 0) {
                    currentCashFlow = 'positive';
                } else {
                    currentCashFlow = 'negative';
                }

                fetch("/api/addCashFlow", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: localStorage.getItem("user_email"), cashFlow: currentCashFlow })

                })
                    .then(res => res.json() )
                    .then(data =>  data )
                    .catch(err => console.log(err.message));

            }).catch(err => console.log(err.message));
    }

    calculate() {
        let transactions = this.state.transactions;
        if (transactions.length > this.state.transactionsLength) {
            transactions.pop();
            let currentState = this.state;
            currentState.balance = currentState.startingBalance;
            currentState.transactions = transactions;
            this.setState({ currentState });
        }
        
        const crntState = this.state;
        crntState.balance = (crntState.balance - crntState.purchaseData.monthlyPayment - crntState.purchaseData.downPayment);
        this.setState({ crntState });
        transactions.push({ amount: this.state.purchaseData.monthlyPayment + this.state.purchaseData.downPayment, date: Date.now() });
        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = this.state.balance;
        for (let i = transactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(transactions[i].date)) / 86400000);
            yPointCoord += transactions[i].amount;
            dataSet.push({ x: xPointCoord, y: yPointCoord });
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({ x: 30, y: this.state.balance });
        regressionSet.push([30, this.state.balance]);

        const result = regression.linear(regressionSet);

        const regLineData2 = [{ x: 0, y: result.equation[1] },
        { x: 30, y: 30 * result.equation[0] + result.equation[1] }];

        const currentState = this.state;
        currentState.regressionEquation2 = result;
        currentState.regLineData2 = regLineData2;
        currentState.dataSet2 = dataSet;
        currentState.compare = true;
        currentState.compareButtonToggle = false;
        this.setState({ currentState });
        this.calculatePurchaseOverInterval();
    }

    calculatePurchaseOverInterval() {
        const m_c1 = this.state.regressionEquation.equation;
        const m_c2 = this.state.regressionEquation2.equation;
        let weightedFactor1 = (this.state.selectedTimeScaleInMonths - this.state.purchaseData.loanTerm) / this.state.selectedTimeScaleInMonths;
        let weightedFactor2 = this.state.purchaseData.loanTerm / this.state.selectedTimeScaleInMonths;
        if (weightedFactor1 <= 0) {
            weightedFactor1 = 0;
            weightedFactor2 = 1;
        }
        const slopeProduct1 = weightedFactor1 * m_c1[0];
        const constProduct1 = weightedFactor1 * m_c1[1];
        const slopeProduct2 = weightedFactor2 * m_c2[0];
        const constProduct2 = weightedFactor2 * m_c2[1];
        const newSlope = (slopeProduct1 + slopeProduct2);
        const newConst = (constProduct1 + constProduct2);
        const regressionEquation3 = [newSlope, newConst];
        const currentState = this.state;
        currentState.regressionEquation3 = regressionEquation3;
        this.setState({ currentState });
    }

    timeScaleHandler(e) {
        const currentState = this.state;
        switch (e.target.name) {
            case 'one-year':
                currentState.selectedTimeScaleInMonths = 12;
                break;
            case 'five-years':
                currentState.selectedTimeScaleInMonths = 60;
                break;
            case 'ten-years':
                currentState.selectedTimeScaleInMonths = 120;
                break;
            case 'twenty-years':
                currentState.selectedTimeScaleInMonths = 240;
                break;
            default:
                currentState.selectedTimeScaleInMonths = 1;
        }

        // if (this.state.compare) {
        //     this.calculatePurchaseOverInterval();
        //     currentState.compare = false;
        // }
        this.setState({ currentState });
    }

    getPurchaseData(data) {
        const currentState = this.state;
        currentState.regressionEquation2 = '';
        currentState.regressionEquation3 = '';
        currentState.regLineData2 = [];
        currentState.dataSet2 = [];
        currentState.selectedTimeScaleInMonths = 1;
        currentState.compare = false;
        currentState.purchaseData = data;
        currentState.compare = true;
        this.setState({
            currentState
        });
        this.calculate();
    }

    render() {
        switch (this.state.selectedTimeScaleInMonths) {
            case 1:
                return (
                    <div className="btnGroupCf">
                        <Rotate top left>
                            <div className="cashFlow-btn-group">
                                <Button color="info" disabled={true} className="cashFlowBtn" onClick={this.timeScaleHandler}>30 Days</Button>
                                <Button color="info" className="cashFlowBtn" name="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                                <Button color="info" className="cashFlowBtn" name="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                                <Button color="info" className="cashFlowBtn" name="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                                <Button color="info" className="cashFlowBtn" name="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>
                            </div>
                        </Rotate>
                        <div className="graph-input-group">
                            <div className="cashFlow-graph">
                                <XYPlot
                                    margin={{ left: 60 }}
                                    width={600}
                                    height={500}
                                    xDomain={[0, 30]}
                                >
                                    <HorizontalGridLines />
                                    <VerticalGridLines />
                                    <XAxis
                                        title="Days"
                                        position="start"
                                        tickTotal={6}
                                    />
                                    <YAxis title="Dollars" />
                                    <LineSeries
                                        color="green"
                                        data={this.state.dataSet} />
                                    <LineSeries
                                        strokeStyle="dashed"
                                        data={this.state.regLineData}
                                        color="blue"
                                    />
                                    <LineSeries
                                        strokeStyle="dashed"
                                        data={this.state.regLineData2}
                                        color="red"
                                    />
                                </XYPlot>
                                <DiscreteColorLegend
                                    height={200}
                                    width={300}
                                    items={ITEMS}
                                />
                            </div>
                            <Fade right>
                                <div className="testForm">
                                    <LoanCalculator purchaseData={this.getPurchaseData} />
                                </div>
                            </Fade>
                        </div>
                    </div >
                );
            case 12:
                return (
                    <div>
                        <div className="cashFlow-btn-group">
                            <Button color="info" className="cashFlowBtn" onClick={this.timeScaleHandler}>30 Days</Button>
                            <Button disabled={true} color="info" className="cashFlowBtn" name="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                            <Button color="info" className="cashFlowBtn" name="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>
                        </div>
                        <OneYear regEq={this.state.regressionEquation} regEq3={this.state.regressionEquation3} />
                    </div>
                );
            case 60:
                return (
                    <div>
                        <div className="cashFlow-btn-group">
                            <Button color="info" className="cashFlowBtn" onClick={this.timeScaleHandler}>30 Days</Button>
                            <Button color="info" className="cashFlowBtn" name="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                            <Button disabled={true} color="info" className="cashFlowBtn" name="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>
                        </div>
                        <FiveYears regEq={this.state.regressionEquation} regEq3={this.state.regressionEquation3} />
                    </div>
                );
            case 120:
                return (
                    <div>
                        <div className="cashFlow-btn-group">
                            <Button color="info" className="cashFlowBtn" onClick={this.timeScaleHandler}>30 Days</Button>
                            <Button color="info" className="cashFlowBtn" name="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                            <Button color="info" className="cashFlowBtn" name="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                            <Button disabled={true} color="info" className="cashFlowBtn" name="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>
                        </div>
                        <TenYears regEq={this.state.regressionEquation} regEq3={this.state.regressionEquation3} />
                    </div>
                );
            case 240:
                return (
                    <div>
                        <div className="cashFlow-btn-group">
                            <Button color="info" className="cashFlowBtn" onClick={this.timeScaleHandler}>30 Days</Button>
                            <Button color="info" className="cashFlowBtn" name="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                            <Button color="info" className="cashFlowBtn" name="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                            <Button color="info" className="cashFlowBtn" name="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                            <Button disabled={true} color="info" className="cashFlowBtn" name="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>


                        </div>
                        <TwentyYears regEq={this.state.regressionEquation} regEq3={this.state.regressionEquation3} />
                    </div>
                );
            default:
                return <h1>An error occurred</h1>
        }
    }
}




