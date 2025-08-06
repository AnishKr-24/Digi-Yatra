// src/pages/services/BusServicePage.jsx

import React, { useState } from 'react';
import './BusServicePage.scss';

const BusServicePage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
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
    console.log("Searching for buses with data:", formData);
    alert(`Searching for buses from ${formData.from} to ${formData.to} on ${formData.date} for ${formData.passengers} passengers.`);
  };

  return (
    <div className="bus-service-container">
      <h1 className="service-title">Book Your Bus Ticket</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} placeholder="e.g., Delhi" />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to" value={formData.to} onChange={handleChange} placeholder="e.g., Mumbai" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Journey</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <select id="passengers" name="passengers" value={formData.passengers} onChange={handleChange}>
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4+ Passengers</option>
          </select>
        </div>
        <div className="form-group form-full-width">
          <button type="submit" className="submit-button">Search Buses</button>
        </div>
      </form>
    </div>
  );
};

export default BusServicePage;