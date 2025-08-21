import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Digi Yatra</Link>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        {/* Offers Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Offers</span>
          <div className="dropdown-content">
            <Link to="/offers/bus" onClick={() => setMenuOpen(false)}>Bus Offers</Link>
            <Link to="/offers/train" onClick={() => setMenuOpen(false)}>Train Offers</Link>
            <Link to="/offers/flight" onClick={() => setMenuOpen(false)}>Flight Offers</Link>
          </div>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Services</span>
          <div className="dropdown-content">
            <Link to="/auth" onClick={() => setMenuOpen(false)}>Bus</Link>
            <Link to="/auth" onClick={() => setMenuOpen(false)}>Train</Link>
            <Link to="/auth" onClick={() => setMenuOpen(false)}>Flight</Link>
          </div>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>

        {/* Buttons for mobile */}
        <div className="navbar-buttons-mobile">
          <Link to="/auth" className="btn login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/auth" className="btn signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      </div>

      <div className="navbar-buttons">
        <Link to="/auth" className="btn login-btn">Login</Link>
        <Link to="/auth" className="btn signup-btn">Sign Up</Link>
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
