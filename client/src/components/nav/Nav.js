import React, { Component } from "react";
import "./Nav.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div class="nav">
                <div>
                    <Navbar light>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navToggle" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Landing;