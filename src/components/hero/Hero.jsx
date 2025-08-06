// src/components/hero/Hero.jsx

import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaLink && (
          <Link to={ctaLink} className="cta-button">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;