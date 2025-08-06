// src/pages/offers/BusOffersPage.jsx

import React from 'react';
import './BusOffersPage.scss'; // अपनी पुरानी SCSS फाइल
import Card from '../../components/common/Card'; // नया Card कंपोनेंट इंपोर्ट करें
import { busOffers } from '../../data';

const BusOffersPage = () => {
  return (
    <div className="bus-offers-container">
      <h1 className="bus-offers-title">Exclusive Bus Offers</h1>
      <div className="offers-list">
        {busOffers.map((offer) => (
          <Card key={offer.id} className="offer-card">
            <div className="card-image-container">
              <img src={offer.image} alt={offer.title} />
            </div>
            <div className="card-content">
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
              <a href="#" className="cta-button">Book Now</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BusOffersPage;