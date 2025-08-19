// src/pages/services/FlightServicePage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="flight-service-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="flight-service-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Book Your Flight
      </motion.h1>

      <motion.form 
        className="flight-booking-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
      >
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
        
        <motion.div className="form-grid">
          <motion.div className="form-group-flight" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="from-flight">From City</label>
            <input type="text" id="from-flight" name="from" value={formData.from} onChange={handleChange} placeholder="e.g., New Delhi" required/>
          </motion.div>
          <motion.div className="form-group-flight" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="to-flight">To City</label>
            <input type="text" id="to-flight" name="to" value={formData.to} onChange={handleChange} placeholder="e.g., Mumbai" required/>
          </motion.div>
          <motion.div className="form-group-flight" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="departure-date">Departure Date</label>
            <input type="date" id="departure-date" name="departureDate" value={formData.departureDate} onChange={handleChange} min={minDate} required/>
          </motion.div>
          {tripType === 'round-trip' && (
            <motion.div className="form-group-flight" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="return-date">Return Date</label>
              <input type="date" id="return-date" name="returnDate" value={formData.returnDate} onChange={handleChange} min={minDate} required/>
            </motion.div>
          )}
          <motion.div className="form-group-flight" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="travelers">Travelers</label>
            <select id="travelers" name="travelers" value={formData.travelers} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div className="form-group form-full-width">
          <motion.button
            type="submit"
            className="search-button-flight"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(90deg, #ff6a00, #ee0979)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Search Flights ✈️
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default FlightServicePage;
