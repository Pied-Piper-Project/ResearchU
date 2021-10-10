import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.PNG';

function Navigation(props){
  return(
    <header className ='1-header' id="header">
      <nav className="nav bd-container">
          <Link className="nav__logo" to="/ResearchU">
            <img src={logo} width={300} alt="ResearchU logo" />
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li
                className={`nav__item  ${
                  props.location.pathname === "/ResearchU" ? "active" : ""
                }`}
              >
                <Link className="nav__link active-link" to="/ResearchU">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav__item  ${
                  props.location.pathname === "/ResearchU/About" ? "active" : ""
                }`}
              >
                <Link className="nav__link" to="/ResearchU/About">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default withRouter(Navigation);