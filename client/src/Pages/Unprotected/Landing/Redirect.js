import React, { Component } from 'react';
import NoMatch from "../../../components/NoMatch/NoMatch";
import Footer from "../../../components/Footer";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <NoMatch />
        <Footer />
      </div>
    );
  }
}

export default ErrorPage;