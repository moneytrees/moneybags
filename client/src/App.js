import React, { Component } from 'react';
import './App.css';
import Walkthrough from './components/Walkthrough';
import AppNavbar from './components/AppNavbar';
import DataBody from './components/DataBody';



class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <Walkthrough />
                <DataBody />
                
            </div>
        );
    }
}

export default App;



