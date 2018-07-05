import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">MoneyTree
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink id="link-btn" href="#">Link Account</NavLink>
                                    <NavLink id="get-accounts-btn" href="#">Get Accounts</NavLink>
                                    <NavLink id="get-item-btn" href="#">Get Item</NavLink>
                                    <NavLink id="get-transactions-btn" href="#">Get Transactions</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
