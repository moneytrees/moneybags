import React, { Component } from 'react';
import '../App.css';
import '../react-vis.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';
import regression from 'regression';
console.log(XYPlot);
export default class LineGraph extends Component {

    render() {
        
        let sampleBalance = 2085;
        let sampleTransactions = [
            {amount: 17, date: '2018-06-10'},
            {amount: 57, date: '2018-06-12'},
            {amount: 100, date: '2018-06-16'},
            {amount: 23, date: '2018-06-17'},
            {amount: -800, date: '2018-06-18'},
            {amount: 8, date: '2018-06-20'},
            {amount: 15, date: '2018-06-21'},
            {amount: 75, date: '2018-06-25'},
            {amount: 11, date: '2018-06-28'},
            {amount: 6, date: '2018-07-01'},
            {amount: 1250, date: '2018-07-05'}
        ];
        
        let dataSet = [];
        let regressionSet = [];
        let xPointCoord;
        let yPointCoord = sampleBalance;
        for (let i = sampleTransactions.length - 1; i >= 0; i--) {
            xPointCoord = 30 - Math.round((Date.now() - new Date(sampleTransactions[i].date)) / 86400000);
            yPointCoord += sampleTransactions[i].amount;
            dataSet.push({x: xPointCoord, y: yPointCoord});
            regressionSet.push([xPointCoord, yPointCoord]);
        }
        dataSet.reverse().push({x: 30, y: sampleBalance});
        regressionSet.push([30, sampleBalance]);
        console.log(dataSet);
        console.log(yPointCoord);
        console.log(xPointCoord);
        const result = regression.linear(regressionSet);
        console.log(result.equation);
        // const regLineData = [{x: 0, y: result.equation[0] + result.equation[1]},
        //                      {x: timePeriodInDays, y: timePeriodInDays * result.equation[0] + result.equation[1]}];
        const regLineData = [{x: 0, y: result.equation[0] + result.equation[1]},
                             {x: 30, y: 30 * result.equation[0] + result.equation[1]}]; 

        return (
            <div className="line-graph">
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
                        data={dataSet} />
                    <LineSeries
                        style={{
                            strokeDasharray: '2 2'
                        }}
                        data={regLineData}
                        strokeDasharray="7, 3"
                    />
                </XYPlot>
            </div>
        )
    }
}
