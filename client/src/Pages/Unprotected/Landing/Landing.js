import React, { Component } from 'react';
import './Landing.css';
/* import Nav from "../../../components/nav" */
import Hero from "../../../components/hero/Hero"
import AboutFeatures from "../../../components/aboutFeatures/AboutFeatures"
import Footer from "../../../components/Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <Nav/> */}
        <Hero />
        <AboutFeatures />
        <Footer />
      </div>
    );
  }
}

export default Landing;