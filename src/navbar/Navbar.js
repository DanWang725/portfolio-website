import "./Navbar.css";
import "../styles.css";
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";

export const Navbar = ({ classOverride }) => {
  const location = useLocation();
  return (
    <div className={`nav-container `}>
      <ul className={`navbar ${classOverride ?? "navbar-default"}`}>
        <li>
          <NavLink
            to="/#home"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#001414" } : {}
            }
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/browse"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#002929" } : {}
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#002929" } : {}
            }
          >
            Create
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/work-term-report"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#001414" } : {}
            }
          >
            Work Term Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
