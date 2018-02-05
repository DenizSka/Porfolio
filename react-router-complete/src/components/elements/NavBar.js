import React from "react";
import { NavLink } from "react-router-dom";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <div className= "nav-wrapper">
    <nav className="navbar" aria-label="main navigation">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        ABOUT ME
      </NavLink>
      <NavLink to="/skills" className="nav-item" activeClassName="active">
        SKILLS
      </NavLink>
      <NavLink to="/projects" className="nav-item" activeClassName="active">
        PROJECTS
      </NavLink>
    </nav>
    </div>
  );
};
