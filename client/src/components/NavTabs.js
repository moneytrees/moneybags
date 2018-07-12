import React from "react";
import { Link } from "react-router-dom";
const isAuth = localStorage.getItem('isAuthenticated');

const NavTabs = () => {

	return (<div>
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand">MoneyTree</a>

			<ul className="nav nav-tabs">
				<li className="nav-item">
					{
						isAuth ? <Link to="/logout" className="nav-link">Logout</Link> : <Link to="/login" className="nav-link">Login</Link>
					}
				</li>
				<li className="nav-item">
					{
						isAuth ?
							<Link
								to="/dashboard"
								className={
									window.location.pathname === "/dashboard"
										? "nav-link active"
										: "nav-link"
								}> Dashboard	</Link>
							:
							console.log("No dashboard 4 u")
					}

				</li>

				<li className="nav-item">
					<Link
						to="/helpeducation"
						className={
							window.location.pathname === "/helpeducation"
								? "nav-link active"
								: "nav-link"
						}
					>
						HelpEducation
                </Link>
				</li>

				<li className="nav-item">
					{
						isAuth ? <Link
							to="/achievements"
							className={
								window.location.pathname === "/achievements"
									? "nav-link active"
									: "nav-link"
							}> Achievements </Link>
							:
							console.log("No achievments 4 u")
					}
				</li>
				<li className="nav-item">
					<Link
						to="/team"
						className={
							window.location.pathname === "/team"
								? "nav-link active"
								: "nav-link"
						}
					>
						Team
                </Link>
				</li>
			</ul>
		</nav>
	</div>
	);
};

export default NavTabs;
