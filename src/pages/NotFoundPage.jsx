// src/pages/NotFoundPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;