import React, { Component } from "react";
import { Button } from "reactstrap";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <h1>Front-End Developers</h1>
            <p className="text-center">David Vizena</p>
            <p className="text-center">Molly Cougil</p>
            <p className="text-center">Sneha Dama</p>
            <p className="text-center">Addis Casco</p>
            <p className="text-center">Natalie Hoben</p>
            <p className="text-center">Christian Ngo</p>
          </div>
          <div className="col-4">
            <h1>Back-End Developers</h1>
            <p className="text-center">Thais Cailet</p>
            <p className="text-center">Yuta Tamura</p>
            <p className="text-center">Rohan Menon</p>
            <p className="text-center">Chris Jones</p>
          </div>
          <div className="col-4">
            <h1>Brand Manager</h1>
            <p className="text-center">Addis Casco</p>
            <p className="text-center">Sneha Dama</p>
            <p className="text-center">Caro Ramirez</p>
            <p className="text-center">David Vizena</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h1>Full-Stack</h1>
            <p className="text-center">Molly Cougil</p>
            <p className="text-center">Chad Alessi</p>
            <p className="text-center">Sergey Nikitin</p>
            <p className="text-center">Wesley Jackson</p>
            <p className="text-center">Brant Campodonico</p>
            <p className="text-center">Marilyn Blythe</p>
            <p className="text-center">Vinanti Naik</p>
            <p className="text-center">Will Abernathy</p>
            <p className="text-center">Connor Thomas</p>
          </div>
          <div className="col-4">
            <h1>QA/QC</h1>
            <p className="text-center">Caro Ramirez</p>
            <p className="text-center">Ejeme Ogedengbe</p>
            <p className="text-center">Juhi Patel</p>
          </div>
          <div className="col-4">
            <h1>Flex-PM</h1>
            <p className="text-center">Molly Cougil</p>
            <p className="text-center">Will Abernathy</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h1>PM</h1>
            <p className="text-center">Natalie Hoben</p>
          </div>
          <div className="col-4">
            <h1>SCRUM Master</h1>
            <p className="text-center">Chad Alessi</p>
            <p className="text-center">Ejeme Ogedengbe</p>
            <p className="text-center">Juhi Patel</p>
          </div>
          <div className="col-4">
            <h1>Deployment Manager</h1>
            <p className="text-center">Molly Cougil</p>
            <p className="text-center">Will Abernathy</p>
          </div>
        </div>
        {/* ALKSJDLKJ */}
        <div className="row">
          <div className="col-4">
            <h1>Flex - Deployment Manager</h1>
            <p className="text-center">Thais Cailet</p>
          </div>
          <div className="col-4">
            <h1>DBA</h1>
            <p className="text-center">Yuta Tamura</p>
            <p className="text-center">Wesley Jackson</p>
            <p className="text-center">Brant Campodonico</p>
            <p className="text-center">Marilyn Blythe</p>
          </div>
          <div className="col-4">
            <h1>Feature Owner</h1>
            <p className="text-center">Rohan Menon</p>
            <p className="text-center">Chris Alessi</p>
            <p className="text-center">Connor Thomas</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
