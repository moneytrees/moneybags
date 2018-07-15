import React, { Component } from 'react';
import './Landing.css';
import Hero from "../../../components/hero/Hero"
import AboutFeatures from "../../../components/aboutFeatures/AboutFeatures"
import Footer from "../../../components/footer"

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