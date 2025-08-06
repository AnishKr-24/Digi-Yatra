// src/components/navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Digi Yatra</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Offers Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Offers</span>
          <div className="dropdown-content">
            <Link to="/offers/bus">Bus Offers</Link>
            <Link to="/offers/train">Train Offers</Link>
            <Link to="/offers/flight">Flight Offers</Link>
          </div>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Services</span>
          <div className="dropdown-content">
            <Link to="/auth">Bus</Link>
            <Link to="/auth">Train</Link>
            <Link to="/auth">Flight</Link>
            {/* <Link to="/services/bus">Bus</Link>
            <Link to="/services/train">Train</Link>
            <Link to="/services/flight">Flight</Link> */}
          </div>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/signup" className="btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
