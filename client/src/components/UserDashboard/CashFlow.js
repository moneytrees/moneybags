import React, { Component } from 'react';
import '../../App.css';
import '../../react-vis.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';
import regression from 'regression';
import OneYear from './OneYear';
import FiveYears from './FiveYears';
import TenYears from './TenYears';
import TwentyYears from './TwentyYears';

export default class CashFlow extends Component {
    state = {
        regressionEquation: '',
        regressionEquation2: '',
        regLineData: [],
        regLineData2: [],
        dataSet: [],
        selectedTimeScaleInMonths: 1,
        compare: false, //false
        numPaymentsInMonths: 60,
        monthlyPayment: 500
    };

    componentWillMount() {
        let sampleBalance = 2085;
        let sampleTransactions = [
            { amount: 17, date: '2018-06-10' },
            { amount: 57, date: '2018-06-12' },
            { amount: 100, date: '2018-06-16' },
            { amount: 23, date: '2018-06-17' },
            { amount: -800, date: '2018-06-18' },
            { amount: 8, date: '2018-06-20' },
            { amount: 15, date: '2018-06-21' },
            { amount: 75, date: '2018-06-25' },
            { amount: 11, date: '2018-06-28' },
            { amount: 6, date: '2018-07-01' },
            { amount: 12, date: '2018-07-05' }
        ];

        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = sampleBalance;
        for (let i = sampleTransactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(sampleTransactions[i].date)) / 86400000);
            yPointCoord += sampleTransactions[i].amount;
            dataSet.push({ x: xPointCoord, y: yPointCoord });
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({ x: 30, y: sampleBalance });
        regressionSet.push([30, sampleBalance]);

        const result = regression.linear(regressionSet);

        const regLineData = [{ x: 0, y: result.equation[0] + result.equation[1] },
        { x: 30, y: 30 * result.equation[0] + result.equation[1] }];

        this.setState({
            regressionEquation: result,
            regLineData,
            dataSet
        });
    }

    calculate = () => {
        let sampleBalance = 2085;
        let sampleTransactions = [
            { amount: 17, date: '2018-06-10' },
            { amount: 57, date: '2018-06-12' },
            { amount: 100, date: '2018-06-16' },
            { amount: 23, date: '2018-06-17' },
            { amount: -800, date: '2018-06-18' },
            { amount: 8, date: '2018-06-20' },
            { amount: 15, date: '2018-06-21' },
            { amount: 75, date: '2018-06-25' },
            { amount: 11, date: '2018-06-28' },
            { amount: 6, date: '2018-07-01' },
            { amount: 12, date: '2018-07-05' }
        ];
        sampleBalance -= 400;
        sampleTransactions.push({ amount: 400, date: Date.now()});
        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = sampleBalance;
        for (let i = sampleTransactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(sampleTransactions[i].date)) / 86400000);
            yPointCoord += sampleTransactions[i].amount;
            dataSet.push({ x: xPointCoord, y: yPointCoord });
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({ x: 30, y: sampleBalance });
        regressionSet.push([30, sampleBalance]);

        const result = regression.linear(regressionSet);

        const regLineData2 = [{ x: 0, y: result.equation[0] + result.equation[1] },
        { x: 30, y: 30 * result.equation[0] + result.equation[1] }];
        const regressionEquation = this.state.regressionEquation;
        const regLineData = this.state.regLineData;
        this.setState({
            regressionEquation,
            regLineData,
            regressionEquation2: result,
            regLineData2,
            dataSet
        });
    }

    timeScaleHandler = (e) => {
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
            case 'twenty-years':
                currentState.selectedTimeScaleInMonths = 240;
        }
        
        this.setState({currentState});
    }

    render() { 
        console.log(this.state.regLineData);
        console.log(this.state.regLineData2);
        console.log(this.state.regressionEquation);
        console.log(this.state.regressionEquation2);
        switch (this.state.selectedTimeScaleInMonths) {
            case 1:
                return (
                    <div className="line-graph">
                        <button onClick={this.calculate}>Compare</button>
                        <button className="one-year" onClick={this.timeScaleHandler}>1 Year</button>
                        <button className="five-years" onClick={this.timeScaleHandler}>5 Years</button>
                        <button className="ten-years" onClick={this.timeScaleHandler}>10 Years</button>
                        <button className="twenty-years" onClick={this.timeScaleHandler}>20 Years</button>
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
                                data={this.state.regLineData}
                                strokeDasharray="7, 3"
                            />
                            <LineSeries
                                style={{
                                    strokeDasharray: '1 1'
                                }}
                                data={this.state.regLineData2}
                                strokeDasharray="1, 3"
                            />
                        </XYPlot>
                    </div>
                );
            case 12:
                return <OneYear regEq={this.state.regressionEquation} regEq2={this.state.regressionEquation2} />;
            case 60:
                return <FiveYears regEq={this.state.regressionEquation} regEq2={this.state.regressionEquation2} />;
            case 120:
                return <TenYears regEq={this.state.regressionEquation} regEq2={this.state.regressionEquation2} />;
            case 240:
                return <TwentyYears regEq={this.state.regressionEquation} regEq2={this.state.regressionEquation2} />;
            default:
                return <h1>An error occurred</h1>
        }
    }
}




