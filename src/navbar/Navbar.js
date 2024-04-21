import './Navbar.css';
import '../styles.css';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { PerformanceContext } from '../Contexts';

export const Navbar = ({ classOverride }) => {
  const { isLowPerformance, setIsLowPerformance } =
    useContext(PerformanceContext);
  const location = useLocation();
  return (
    <div className={`nav-container `}>
      <ul className={`navbar ${classOverride ?? 'navbar-default'}`}>
        <li>
          <NavLink
            to="/#home"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#001414' } : {}
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work-term-report"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#001414' } : {}
            }
          >
            Work Term Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/risk-calculator"
            className="navlink"
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#001414' } : {}
            }
          >
            Fun Stuff
          </NavLink>
        </li>
        <li
          className="navlink"
          onClick={() => setIsLowPerformance(!isLowPerformance)}
        >
          {isLowPerformance ? 'Background: Off' : 'Background: On'}
        </li>
      </ul>
    </div>
  );
};
