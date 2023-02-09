import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Goals" activeClassName="active">
            Goals
          </NavLink>
        </li>
        <li>
          <NavLink to="/Recurring" activeClassName="active">
            Recurring
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;