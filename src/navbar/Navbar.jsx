import './Navbar.css';
import '../styles.css';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { StylingContext } from '../app/contexts/StylingProvider';
import { PerformanceContext } from '../app/contexts/PerformanceProvider';

export const Navbar = () => {
  const location = useLocation();
  const { isLowPerformance, setIsLowPerformance } =
    useContext(PerformanceContext);
  const { navbarClassOverrides } = useContext(StylingContext);
  return (
    <div className={`nav-container `}>
      <ul className={`navbar ${navbarClassOverrides ?? 'navbar-default'}`}>
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
