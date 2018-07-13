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

export default class CashFlow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regressionEquation: '',
            regressionEquation2: '',
            regressionEquation3: '',
            regLineData: [],
            regLineData2: [],
            regLineData3: [],
            dataSet: [],
            dataSet2: [],
            selectedTimeScaleInMonths: 1,
            compare: false, //false
            numPaymentsInMonths: 60,
            monthlyPaymentAmount: 400,
            purchaseData: '',
            sampleBalance: 2085
        };

        this.calculate = this.calculate.bind(this);
        this.calculatePurchaseOverInterval = this.calculatePurchaseOverInterval.bind(this);
        this.timeScaleHandler = this.timeScaleHandler.bind(this);

    }
    componentDidMount() {
        // axios.post('/api/addCashFlow', {cashFlow: 'cash flow string'})
        //     .then((data) => {
        //         console.log(data);
        //         // send 'positive', 'negative', or 'neutral'
        //     });

        // fetch("/api/transactions", {
        //     method: "POST"
        //   })
        //     .then(data => data.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err.message));
        //   console.log("transaction");

        let sampleTransactions = [
            { amount: 17, date: '2018-06-15' },
            { amount: 57, date: '2018-06-17' },
            { amount: 100, date: '2018-06-19' },
            { amount: 23, date: '2018-06-21' },
            { amount: -800, date: '2018-06-24' },
            { amount: 8, date: '2018-06-26' },
            { amount: 15, date: '2018-06-28' },
            { amount: 75, date: '2018-06-30' },
            { amount: 11, date: '2018-07-02' },
            { amount: 6, date: '2018-07-04' },
            { amount: 12, date: '2018-07-08' }
        ];

        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = this.state.sampleBalance;
        for (let i = sampleTransactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(sampleTransactions[i].date)) / 86400000);
            yPointCoord += sampleTransactions[i].amount;
            dataSet.push({ x: xPointCoord, y: yPointCoord });
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({ x: 30, y: this.state.sampleBalance });
        regressionSet.push([30, this.state.sampleBalance]);

        const result = regression.linear(regressionSet);

        const regLineData = [{ x: 0, y: result.equation[0] + result.equation[1] },
        { x: 30, y: 30 * result.equation[0] + result.equation[1] }];

        const currentState = this.state;
        currentState.regressionEquation = result;
        currentState.regLineData = regLineData;
        currentState.dataSet = dataSet;
        this.setState({ currentState });
    }

    calculate() {

        let sampleTransactions = [
            { amount: 17, date: '2018-06-15' },
            { amount: 57, date: '2018-06-17' },
            { amount: 100, date: '2018-06-19' },
            { amount: 23, date: '2018-06-21' },
            { amount: -800, date: '2018-06-24' },
            { amount: 8, date: '2018-06-26' },
            { amount: 15, date: '2018-06-28' },
            { amount: 75, date: '2018-06-30' },
            { amount: 11, date: '2018-07-02' },
            { amount: 6, date: '2018-07-04' },
            { amount: 12, date: '2018-07-08' }
        ];
        const crntState = this.state;
        console.log(crntState.purchaseData.downPayment);
        console.log(crntState.sampleBalance);
        console.log(crntState.sampleBalance - crntState.purchaseData.downPayment - crntState.purchaseData.monthlyPayment);
        crntState.sampleBalance = (crntState.sampleBalance - crntState.purchaseData.monthlyPayment - crntState.purchaseData.downPayment);
        this.setState({ crntState });
        console.log(this.state.sampleBalance);
        sampleTransactions.push({ amount: this.state.purchaseData.monthlyPayment + this.state.purchaseData.downPayment, date: Date.now() });
        console.log(sampleTransactions[sampleTransactions.length - 1]);
        console.log(this.state.sampleBalance);
        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = this.state.sampleBalance;
        for (let i = sampleTransactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(sampleTransactions[i].date)) / 86400000);
            yPointCoord += sampleTransactions[i].amount;
            dataSet.push({ x: xPointCoord, y: yPointCoord });
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({ x: 30, y: this.state.sampleBalance });
        regressionSet.push([30, this.state.sampleBalance]);

        const result = regression.linear(regressionSet);

        const regLineData2 = [{ x: 0, y: result.equation[0] + result.equation[1] },
        { x: 30, y: 30 * result.equation[0] + result.equation[1] }];

        const currentState = this.state;
        currentState.regressionEquation2 = result;
        currentState.regLineData2 = regLineData2;
        currentState.dataSet2 = dataSet;
        currentState.compare = true;
        this.setState({ currentState });
    }

    calculatePurchaseOverInterval() {
        const m_c1 = this.state.regressionEquation.equation;
        const m_c2 = this.state.regressionEquation2.equation;
        const intervalWithoutPayments = this.state.selectedTimeScaleInMonths - this.state.numPaymentsInMonths;
        let weightedFactor1 = intervalWithoutPayments / this.state.numPaymentsInMonths;
        let weightedFactor2 = this.state.numPaymentsInMonths / intervalWithoutPayments;
        if (!intervalWithoutPayments) {
            weightedFactor1 = 1;
            weightedFactor2 = 1;
        }
        const slopeProduct1 = weightedFactor1 * m_c1[0];
        const constProduct1 = weightedFactor1 * m_c1[1];
        const slopeProduct2 = weightedFactor2 * m_c2[0];
        const constProduct2 = weightedFactor2 * m_c2[1];
        const newSlope = (slopeProduct1 + slopeProduct2) / 2;
        const newConst = (constProduct1 + constProduct2) / 2;
        const regLineData3 = [{ x: 0, y: newConst },
        { x: this.state.selectedTimeScaleInMonths, y: newSlope * this.state.selectedTimeScaleInMonths + newConst }];
        const currentState = this.state;
        currentState.regLineData3 = regLineData3;
        this.setState({ currentState });
    }

    timeScaleHandler(e) {
        const currentState = this.state;
        switch (e.target.className) {
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
        this.setState({ currentState });
        if (this.state.compare) {
            this.calculatePurchaseOverInterval();
        }
    }

    getPurchaseData(data) {
        const currentState = this.state;
        currentState.purchaseData = data;
        console.log(data);
        this.setState({
            currentState
        });
    }

    render() {
        switch (this.state.selectedTimeScaleInMonths) {
            case 1:
                return (
                    <div>
                        <div className="cashFlow-btn-group">
                            <Button color="info" onClick={this.calculate}>Compare</Button>
                            <Button color="info" onClick={this.timeScaleHandler}>30 Days</Button>
                            <Button color="info" className="one-year" onClick={this.timeScaleHandler}>1 Year</Button>
                            <Button color="info" className="five-years" onClick={this.timeScaleHandler}>5 Years</Button>
                            <Button color="info" className="ten-years" onClick={this.timeScaleHandler}>10 Years</Button>
                            <Button color="info" className="twenty-years" onClick={this.timeScaleHandler}>20 Years</Button>
                        </div>
                        <div className="graph-input-group">
                            <div className="cashFlow-graph">
                                <XYPlot
                                    width={500}
                                    height={500}
                                    xDomain={[0, 30]}
                                >
                                    <HorizontalGridLines />
                                    <VerticalGridLines />
                                    <XAxis
                                        title="X Axis"
                                        position="start"
                                        tickTotal={6}
                                    />
                                    <YAxis title="Y Axis" />
                                    <LineSeries
                                        data={this.state.dataSet} />
                                    <LineSeries
                                        style={{
                                            strokeDasharray: '2 2'
                                        }}
                                        data={this.state.regLineData2}
                                        strokeDasharray="7, 3"
                                    />
                                    <LineSeries
                                        style={{
                                            strokeDasharray: '1 1'
                                        }}
                                        data={this.state.regLineData}
                                        strokeDasharray="1, 3"
                                    />
                                </XYPlot>
                            </div>
                            <div className="testForm">
                                <LoanCalculator purchaseData={this.getPurchaseData.bind(this)} />
                            </div>
                        </div>
                    </div >
                );
            case 12:
                return (
                    <div>
                        <button onClick={this.calculate.bind(this)}>Compare</button>
                        <button onClick={this.timeScaleHandler}>30 Days</button>
                        <button className="one-year" onClick={this.timeScaleHandler}>1 Year</button>
                        <button className="five-years" onClick={this.timeScaleHandler}>5 Years</button>
                        <button className="ten-years" onClick={this.timeScaleHandler}>10 Years</button>
                        <button className="twenty-years" onClick={this.timeScaleHandler}>20 Years</button>
                        <OneYear regEq={this.state.regLineData} regEq3={this.state.regLineData3} />
                    </div>
                );
            case 60:
                return (
                    <div>
                        <button onClick={this.calculate.bind(this)}>Compare</button>
                        <button onClick={this.timeScaleHandler}>30 Days</button>
                        <button className="one-year" onClick={this.timeScaleHandler}>1 Year</button>
                        <button className="five-years" onClick={this.timeScaleHandler}>5 Years</button>
                        <button className="ten-years" onClick={this.timeScaleHandler}>10 Years</button>
                        <button className="twenty-years" onClick={this.timeScaleHandler}>20 Years</button>
                        <FiveYears regEq={this.state.regLineData} regEq3={this.state.regLineData3} />
                    </div>
                );
            case 120:
                return (
                    <div>
                        <button onClick={this.calculate}>Compare</button>
                        <button onClick={this.timeScaleHandler}>30 Days</button>
                        <button className="one-year" onClick={this.timeScaleHandler}>1 Year</button>
                        <button className="five-years" onClick={this.timeScaleHandler}>5 Years</button>
                        <button className="ten-years" onClick={this.timeScaleHandler}>10 Years</button>
                        <button className="twenty-years" onClick={this.timeScaleHandler}>20 Years</button>
                        <TenYears regEq={this.state.regLineData} regEq3={this.state.regLineData3} />
                    </div>
                );
            case 240:
                return (
                    <div>
                        <button onClick={this.calculate.bind(this)}>Compare</button>
                        <button onClick={this.timeScaleHandler}>30 Days</button>
                        <button className="one-year" onClick={this.timeScaleHandler}>1 Year</button>
                        <button className="five-years" onClick={this.timeScaleHandler}>5 Years</button>
                        <button className="ten-years" onClick={this.timeScaleHandler}>10 Years</button>
                        <button className="twenty-years" onClick={this.timeScaleHandler}>20 Years</button>
                        <TwentyYears regEq={this.state.regLineData} regEq3={this.state.regLineData3} />
                    </div>
                );
            default:
                return <h1>An error occurred</h1>
        }
    }
}




