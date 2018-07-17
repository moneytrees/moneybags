import React, { Component } from 'react';
import './Landing.css';
import Hero from "../../../components/Hero/Hero"
import AboutFeatures from "../../../components/AboutFeatures/AboutFeatures";
import Footer from "../../../components/Footer"

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutFeatures />
        <Footer />
      </div>
    );
  }
}

export default Landing;