import "./Navbar.css";
import "../styles.css";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`nav-container ${location.pathname === "/" && "start-bottom"}`}
    >
      <ul className="navbar">
        <li>
          <NavLink
            to="/#home"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#cbcbcb" } : {}
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#cbcbcb" } : {}
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
              isActive ? { backgroundColor: "#cbcbcb" } : {}
            }
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#cbcbcb" } : {}
            }
          >
            My Collection
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
