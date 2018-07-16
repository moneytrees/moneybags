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

export default class OneYear extends Component {
    render() {
        const m1 = this.props.regEq.equation[0];
        const c1 = this.props.regEq.equation[1];
        const lineData = [{ x: 0, y: c1 }, { x: 365, y: 365 * m1 + c1 }];
        
        let compareLine = [];
        if (this.props.regEq3) {
            const m2 = this.props.regEq3[0];
            const c2 = this.props.regEq3[1];
            const lineData2 = [{ x: 0, y: c2 }, { x: 365, y: 365 * m2 + c2 }];
            compareLine = lineData2;
        }

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const tickFormat = function (t, i) {
            return (<tspan>
                <tspan x="0" dy="1em">{months[i]}</tspan>
            </tspan>);
        }
        return (
            <div className="cashFlow-graph">
                <XYPlot
                    margin={{ left: 60 }}
                    width={500}
                    height={500}
                    xDomain={[0, 365]}
                >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis
                        title="Months"
                        position="start"
                        tickValues={[0, 33.18, 66.36, 99.54, 132.72, 165.9, 199.08, 232.26, 265.44, 298.62, 331.8, 365]}
                        tickFormat={tickFormat}
                    />
                    <YAxis title="Dollars" />
                    <LineSeries
                        strokeStyle="dashed"
                        data={lineData}
                        color="blue"
                    />
                    <LineSeries
                        color="red"
                        data={compareLine}
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
