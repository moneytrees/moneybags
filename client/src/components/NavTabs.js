import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {

  return (<div>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">MoneyTree</a>

            <ul className="nav nav-tabs">
              <li className="nav-item">{
                  localStorage.getItem('isAuthenticated') ?
                  <Link to="/logout" className="nav-link">Logout</Link>
                  : <Link to="/login" className="nav-link">Login</Link>
              }
              </li>
              <li className="nav-item">
                <Link
                    to="/dashboard"
                    className={
                        window.location.pathname === "/dashboard"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                  dashboard
                </Link>
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
