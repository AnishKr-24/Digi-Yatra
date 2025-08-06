// src/components/about/About.jsx

import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Digi Yatra</h1>
      <p className="about-intro">
        Welcome to Digi Yatra, your trusted partner for seamless and hassle-free travel bookings. 
        Our mission is to simplify the process of booking bus, train, and flight tickets, 
        providing you with the best deals and a user-friendly experience.
      </p>

      <section className="about-section mission-section">
        <h2>Our Mission</h2>
        <p>
          To empower travelers with a reliable and efficient platform that makes journey planning 
          easy and accessible for everyone. We strive to offer transparent pricing and excellent 
          customer support.
        </p>
      </section>

      <section className="about-section team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Head of Operations</p>
        </div>
      </section>

      <section className="about-section history-section">
        <h2>Our Journey</h2>
        <p>
          Founded in 2023, Digi Yatra started with a simple idea: to bring all travel booking services 
          under one roof. Since then, we have grown to serve millions of customers, 
          constantly innovating to improve your travel experience.
        </p>
      </section>
    </div>
  );
};

export default About;