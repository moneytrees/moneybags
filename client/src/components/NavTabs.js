import React from "react";
import { Link } from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/reactstrap';


// const NavTabs = () => {

// 	return (<div>
// 		<nav className="navbar navbar-dark bg-dark">
// 			<a className="navbar-brand" href="/">MoneyTree</a>

// 			<Nav className="ml-auto" navbar>
// 				<NavItem>
// 					{
// 						isAuth ?

// 							<Link to="/logout" className="nav-link">Logout</Link> : <Link to="/login" className="nav-link">Login</Link>
// 					}
// 				</NavItem>
// 				<NavItem>
// 					{
// 						isAuth ?
// 							<Link
// 								to="/dashboard"
// 								className={
// 									window.location.pathname === "/dashboard"
// 										? "nav-link active"
// 										: "nav-link"
// 								}> Dashboard	</Link>
// 							:
// 							console.log("No dashboard 4 u")
// 					}

// 				</NavItem>

// 				<NavItem>
// 					<Link
// 						to="/helpeducation"
// 						className={
// 							window.location.pathname === "/helpeducation"
// 								? "nav-link active"
// 								: "nav-link"
// 						}
// 					>
// 						HelpEducation
//                 </Link>
// 				</NavItem>

// 				<NavItem>
// 					{
// 						isAuth ? <Link
// 							to="/achievements"
// 							className={
// 								window.location.pathname === "/achievements"
// 									? "nav-link active"
// 									: "nav-link"
// 							}> Achievements </Link>
// 							:
// 							console.log("No achievments 4 u")
// 					}
// 				</NavItem>
// 				<NavItem>
// 					<Link
// 						to="/team"
// 						className={
// 							window.location.pathname === "/team"
// 								? "nav-link active"
// 								: "nav-link"
// 						}
// 					>
// 						Team
//                 </Link>
// 				</NavItem>
// 			</Nav>
// 		</nav>
// 	</div>
// 	);
// };

// export default NavTabs;


export default class Example extends React.Component {
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

	toggleBtnDisplay() {
		const localAuth = localStorage.getItem("isAuthenticated");

		if (localAuth) this.setState({
			auth: true
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light>
					<NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/components/" display={this.state.auth}>Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
