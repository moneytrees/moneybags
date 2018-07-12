
import React, { Component } from 'react';
//import tamagotchi from '.././imgs/tamagotchi200x220.png';
import Education from '../components/HelpEducation/Education';
import Help from '../components/HelpEducation/Help';
import "./helpeducation.css";

class Helpeducation extends Component {
    render() {
        return (
            <div>
                
              

        <Education/>
                <Help/>
            </div>
        );
    }
}
export default Helpeducation ;