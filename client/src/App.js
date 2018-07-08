import React, { Component } from 'react';
import './App.css';
import Walkthrough from './components/Walkthrough';
import AppNavbar from './components/AppNavbar';
import PieGraph from './components/PieGraph';
import LineGraph from './components/LineGraph';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <Walkthrough />
                <PieGraph />
                <LineGraph />
            </div>
        );
    }
}

export default App;



