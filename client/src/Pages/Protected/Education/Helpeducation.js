import React, { Component } from 'react';
import Education from '../../../components/HelpEducation/Education';
import "./helpeducation.css";

import Footer from "../../../components/Footer"


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