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
} from 'react-vis/dist';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';

const ITEMS = [
    { title: 'Current Cash Flow Trend', color: 'blue' },
    { title: 'Trend w/Optional Purchase', color: 'red' }
];
export default class TwentyYears extends Component {
    render() {
        const m1 = this.props.regEq.equation[0];
        const c1 = this.props.regEq.equation[1];
        const lineData = [{ x: 0, y: c1 }, { x: 20 * 365, y: 20 * 365 * m1 + c1 }];

        let compareLine = [];
        if (this.props.regEq3) {
            const m2 = this.props.regEq3[0];
            const c2 = this.props.regEq3[1];
            const lineData2 = [{ x: 0, y: c2 }, { x: 20 * 365, y: 20 * 365 * m2 + c2 }];
            compareLine = lineData2;
        }

        const ticks = ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'];
        const tickFormat = function (t, i) {
            return (<tspan>
                <tspan x="0" dy="1em">{ticks[i]}</tspan>
            </tspan>);
        }
        return (
            <div className="cashFlow-graph">
                <XYPlot
                    margin={{ left: 60 }}
                    width={500}
                    height={500}
                    xDomain={[0, 20 * 365]}
                >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis
                        title="Years"
                        position="start"
                        tickValues={[0, 730, 1460, 2190, 2920, 3650, 4380, 5110, 5840, 6570, 7300]}
                        tickFormat={tickFormat}
                    />
                    <YAxis title="Dollars" />
                    <LineSeries
                        data={lineData}
                        color="blue"
                        strokeStyle="dashed"
                    />
                    <LineSeries
                        data={compareLine}
                        color="red"
                        strokeStyle="dashed"
                    />
                </XYPlot>
                <DiscreteColorLegend
                    height={200}
                    width={300}
                    items={ITEMS}
                />
            </div>
        )
    }
}
