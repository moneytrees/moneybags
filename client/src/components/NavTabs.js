import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <div>
  <nav className="navbar navbar-dark bg-dark">
  
  <a className="navbar-brand" >MoneyTree</a>
  
  
  
  <ul className="nav nav-tabs">
    
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Account information
      </Link>
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
   
  </ul>


  </nav>
  </div>
);



export default NavTabs;