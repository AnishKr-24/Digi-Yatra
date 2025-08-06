// src/pages/services/TrainServicePage.jsx

import React, { useState } from 'react';
import './TrainServicePage.scss';

const TrainServicePage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    class: 'all'
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
    console.log("Searching for trains with data:", formData);
    alert(`Searching for trains from ${formData.from} to ${formData.to} on ${formData.date} with class ${formData.class}.`);
  };

  return (
    <div className="train-service-container">
      <h1 className="train-service-title">Book Your Train Ticket</h1>
      <div className="train-booking-card">
        <form className="train-booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group-train">
              <label htmlFor="from-train">From Station</label>
              <input type="text" id="from-train" name="from" value={formData.from} onChange={handleChange} placeholder="e.g., New Delhi" />
            </div>
            <div className="form-group-train">
              <label htmlFor="to-train">To Station</label>
              <input type="text" id="to-train" name="to" value={formData.to} onChange={handleChange} placeholder="e.g., Patna Jn" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group-train">
              <label htmlFor="date-train">Date of Journey</label>
              <input type="date" id="date-train" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group-train">
              <label htmlFor="class-train">Class</label>
              <select id="class-train" name="class" value={formData.class} onChange={handleChange}>
                <option value="all">All Classes</option>
                <option value="1a">1A - First AC</option>
                <option value="2a">2A - Second AC</option>
                <option value="3a">3A - Third AC</option>
                <option value="sl">SL - Sleeper</option>
              </select>
            </div>
          </div>
          <button type="submit" className="search-button-train">Search Trains</button>
        </form>
      </div>
    </div>
  );
};

export default TrainServicePage;