import React, { Component } from 'react';
import './App.css';
import Walkthrough from './components/Walkthrough';
import AppNavbar from './components/AppNavbar';

class App extends Component {



    render() {
        return (
            <div className="App">
                <Walkthrough />
                <AppNavbar />
            </div>
        );
    }

}

export default App;



