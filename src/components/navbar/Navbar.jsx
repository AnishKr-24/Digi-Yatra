import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offersDropdownOpen, setOffersDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setOffersDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === 'offers') {
      setOffersDropdownOpen(!offersDropdownOpen);
      setServicesDropdownOpen(false); // Close other dropdown
    } else if (dropdownName === 'services') {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setOffersDropdownOpen(false); // Close other dropdown
    }
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-logo">
        <Link to="/" onClick={handleLinkClick}>Digi Yatra</Link>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>

        {/* Offers Dropdown */}
        <li className={`dropdown ${offersDropdownOpen ? 'active' : ''}`}>
          <span 
            className="dropbtn" 
            onClick={() => toggleDropdown('offers')}
            aria-expanded={offersDropdownOpen}
            aria-controls="offers-menu"
          >
            Offers
          </span>
          <div className="dropdown-content" id="offers-menu">
            <Link to="/offers/bus" onClick={handleLinkClick}>Bus Offers</Link>
            <Link to="/offers/train" onClick={handleLinkClick}>Train Offers</Link>
            <Link to="/offers/flight" onClick={handleLinkClick}>Flight Offers</Link>
          </div>
        </li>

        {/* Services Dropdown */}
        <li className={`dropdown ${servicesDropdownOpen ? 'active' : ''}`}>
          <span 
            className="dropbtn" 
            onClick={() => toggleDropdown('services')}
            aria-expanded={servicesDropdownOpen}
            aria-controls="services-menu"
          >
            Services
          </span>
          <div className="dropdown-content" id="services-menu">
            <Link to="/auth" onClick={handleLinkClick}>Bus</Link>
            <Link to="/auth" onClick={handleLinkClick}>Train</Link>
            <Link to="/auth" onClick={handleLinkClick}>Flight</Link>
          </div>
        </li>

        <li>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
        </li>

        {/* Buttons for mobile */}
        <div className="navbar-buttons-mobile">
          <Link to="/auth" className="btn login-btn" onClick={handleLinkClick}>Login</Link>
          <Link to="/auth" className="btn signup-btn" onClick={handleLinkClick}>Sign Up</Link>
        </div>
      </ul>

      {/* Buttons for desktop */}
      <div className="navbar-buttons">
        <Link to="/auth" className="btn login-btn">Login</Link>
        <Link to="/auth" className="btn signup-btn">Sign Up</Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;