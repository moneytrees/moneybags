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

export default class FiveYears extends Component {
    render() {
        return (
            <div>
                <XYPlot
                    width={500}
                    height={500}
                    xDomain={[0, 5]}
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
                        style={{
                            strokeDasharray: '2 2'
                        }}
                        data={this.props.regEq3}
                        strokeDasharray="7, 3"
                    />
                    <LineSeries
                        style={{
                            strokeDasharray: '1 1'
                        }}
                        data={this.props.regEq}
                        strokeDasharray="1, 3"
                    />
                </XYPlot>
            </div>
        )
    }
}
