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
    {title: 'Current Cash Flow Trend', color: 'blue'},
    {title: 'Trend w/Optional Purchase', color: 'red'}
];
export default class TenYears extends Component {
    render() {
        const m1 = this.props.regEq.equation[0];
        const c1 = this.props.regEq.equation[1];
        const lineData = [{x: 0, y: c1}, {x: 10, y: 10 * 365 * m1 + c1}];
        const m2 = this.props.regEq3.equation[0];
        const c2 = this.props.regEq3.equation[1];
        const lineData2 = [{x: 0, y: c2}, {x: 10, y: 10 * 365 * m2 + c2}];

        const tickFormat = function (i) {
            return (<tspan>
                <tspan x="0" dy="1em">{i}</tspan>
            </tspan>);
        }
        return (
            <div className="cashFlow-graph">
                <XYPlot
                    margin={{left: 60}}
                    width={500}
                    height={500}
                    xDomain={[0, 10]}
                >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis
                        title="X Axis"
                        position="start"
                        tickValues={[0, 365, 730, 1095, 1460, 1825, 2190, 2555, 2920, 3285, 3650]}
                        tickFormat={tickFormat}
                    />
                    <YAxis title="Y Axis" />
                    <LineSeries
                        data={lineData}
                        color="blue"
                        strokeStyle="dashed"
                    />
                    <LineSeries
                        data={lineData2}
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
