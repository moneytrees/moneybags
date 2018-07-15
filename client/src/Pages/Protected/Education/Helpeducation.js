
import React, { Component } from 'react';
//import tamagotchi from '.././imgs/tamagotchi200x220.png';
import Education from '../../../components/HelpEducation/Education';
//import Help from '../../../components/HelpEducation/Help';
import "./helpeducation.css";
import Footer from "../../../components/Footer/Footer"


class Helpeducation extends Component {
    render() {
        return (
            <div>
                <div className="faq">
                    <Education />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Helpeducation;