// src/pages/services/FlightServicePage.jsx

import React, { useState } from 'react';
import './FlightServicePage.scss';

const FlightServicePage = () => {
  const [tripType, setTripType] = useState('one-way');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    travelers: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for flights with data:", formData);
    alert(`Searching for ${tripType} flights from ${formData.from} to ${formData.to} on ${formData.departureDate}.`);
  };

  return (
    <div className="flight-service-container">
      <h1 className="flight-service-title">Book Your Flight</h1>
      <form className="flight-booking-form" onSubmit={handleSubmit}>
        <div className="form-tabs">
          <button 
            type="button"
            className={tripType === 'one-way' ? 'active' : ''}
            onClick={() => setTripType('one-way')}
          >
            One Way
          </button>
          <button
            type="button"
            className={tripType === 'round-trip' ? 'active' : ''}
            onClick={() => setTripType('round-trip')}
          >
            Round Trip
          </button>
        </div>
        
        <div className="form-grid">
          <div className="form-group-flight">
            <label htmlFor="from-flight">From City</label>
            <input type="text" id="from-flight" name="from" value={formData.from} onChange={handleChange} placeholder="e.g., New Delhi" />
          </div>
          <div className="form-group-flight">
            <label htmlFor="to-flight">To City</label>
            <input type="text" id="to-flight" name="to" value={formData.to} onChange={handleChange} placeholder="e.g., Mumbai" />
          </div>
          <div className="form-group-flight">
            <label htmlFor="departure-date">Departure Date</label>
            <input type="date" id="departure-date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
          </div>
          {tripType === 'round-trip' && (
            <div className="form-group-flight">
              <label htmlFor="return-date">Return Date</label>
              <input type="date" id="return-date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
            </div>
          )}
          <div className="form-group-flight">
            <label htmlFor="travelers">Travelers</label>
            <select id="travelers" name="travelers" value={formData.travelers} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
        <button type="submit" className="search-button-flight">Search Flights</button>
      </form>
    </div>
  );
};

export default FlightServicePage;