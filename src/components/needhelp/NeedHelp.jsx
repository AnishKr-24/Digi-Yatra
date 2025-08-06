

import React from 'react';
import './NeedHelp.scss';
import { Link } from 'react-router-dom';

const NeedHelp = () => {
  return (
    <div className="need-help-container">
      <div className="need-help-content">
        <h3>Need Help with Your Booking?</h3>
        <p>Our customer support team is available 24/7 to assist you.</p>
        <Link to="/contact" className="contact-button">Contact Support</Link>
      </div>
    </div>
  );
};

export default NeedHelp;