// src/pages/offers/TrainOffersPage.jsx

import React from 'react';
import './TrainOffersPage.scss';
import Card from '../../components/common/Card'; // नया Card कंपोनेंट इंपोर्ट करें
import { trainOffers } from '../../data';

const TrainOffersPage = () => {
  return (
    <div className="train-offers-container">
      <h1 className="train-offers-title">Train Travel Offers</h1>
      <div className="train-offers-grid">
        {trainOffers.map((offer) => (
          <Card key={offer.id} className="train-offer-card">
            <div className="card-header">
              <h4>{offer.title}</h4>
            </div>
            <div className="card-body">
              <ul>
                {offer.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <div className="offer-price">{offer.price}</div>
              <a href="#" className="book-button">Book Now</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrainOffersPage;