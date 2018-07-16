
import React, { Component } from 'react';


class Baseline extends Component {
    render() {
        return (
            <div id="wrapper">

                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">Money Tree</a>
                        </li>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Shortcuts</a>
                        </li>
                        <li>
                            <a href="#">Overview</a>
                        </li>

                    </ul>
                </div>

            </div>
        );
    }
}

export default Baseline;
