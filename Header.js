import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link home-link">HOME</Link>
          </li>
          <li>
          <Link to="/team" className="nav-link team-link">TEAM</Link>
          </li>
          <li>
            <Link to="/demo" className="nav-link demo-link">SWIFTBOWL</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;