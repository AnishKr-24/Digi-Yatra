
import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <Link to="/" className="footer-logo">Digi Yatra</Link>
          <p>
            Digi Yatra is your one-stop solution for booking bus, train, and flight tickets with ease and comfort.
          </p>
        </div>
        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services/bus">Services</Link></li>
            <li><Link to="/offers/bus">Offers</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@digiyatra.com</p>
          <p>Phone: +91 1234567890</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Digi Yatra | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;