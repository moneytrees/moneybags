import React from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class NavbarNoAuth extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      auth: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="navigationBar">
        <Navbar color="light" light fixed="top">
          <NavbarBrand href="/" className="mr-auto">Money Tree</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
