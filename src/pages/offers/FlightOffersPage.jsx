// src/pages/offers/FlightOffersPage.jsx

import React from 'react';
import './FlightOffersPage.scss';
import Card from '../../components/common/Card'; // नया Card कंपोनेंट इंपोर्ट करें
import { flightOffers } from '../../data';

const FlightOffersPage = () => {
  return (
    <div className="flight-offers-container">
      <h1 className="flight-offers-title">Discover Our Flight Deals</h1>
      <div className="offers-grid">
        {flightOffers.map((offer) => (
          <Card key={offer.id} className="flight-card">
            <div className="card-header">
              <img className="airline-logo" src={offer.airlineLogo} alt="Airline Logo" />
              <h3>{offer.title}</h3>
              <p className="destination">{offer.destination}</p>
            </div>
            <div className="card-body">
              <ul>
                {offer.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <span className="price">{offer.price}</span>
              <a href="#" className="book-button">Book Now</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlightOffersPage;