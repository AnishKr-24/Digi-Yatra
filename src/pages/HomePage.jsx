// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import NeedHelp from '../components/needhelp/NeedHelp';
import './HomePage.scss';
import '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* <Navbar /> */}
      {/* 🔐 Auth Buttons in Top-Right */}
      {/* <div className="top-auth-container">
        <div className="auth-buttons">
          <Link to="/login" className="auth-btn login-btn">Login</Link>
          <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
        </div>
      </div> */}

      {/* Hero Section */}
      <Hero 
        title="Your Journey Starts Here"
        subtitle="Book your Bus, Train, and Flight tickets with ease and get the best deals."
        ctaText="Book Now"
        ctaLink="/services/bus"
      />

      {/* Services Overview Section */}
      <section className="services-section">
        <h2 className="section-title">Explore Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h4>Bus Tickets</h4>
            <p>Book bus tickets online for all major routes across India with great offers.</p>
            <Link to="/services/bus" className="service-link">Find a Bus</Link>
          </div>
          <div className="service-card">
            <h4>Train Tickets</h4>
            <p>Find and book train tickets for your journey. Get real-time status updates.</p>
            <Link to="/services/train" className="service-link">Find a Train</Link>
          </div>
          <div className="service-card">
            <h4>Flight Tickets</h4>
            <p>Get the best deals on domestic and international flight bookings.</p>
            <Link to="/services/flight" className="service-link">Find a Flight</Link>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <NeedHelp /> 
    </div>
  );
};

export default HomePage;
