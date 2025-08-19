// src/pages/services/BusServicePage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BusServicePage.scss';

const BusServicePage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
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
    console.log("Searching for buses with data:", formData);
    alert(`Searching for buses from ${formData.from} to ${formData.to} on ${formData.date} for ${formData.passengers} passengers.`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="bus-service-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="service-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Book Your Bus Ticket
      </motion.h1>

      <motion.form 
        className="booking-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
      >
        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="e.g., Delhi"
            required
          />
        </motion.div>

        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="e.g., Mumbai"
            required
          />
        </motion.div>

        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="date">Date of Journey</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate}
            required
          />
        </motion.div>

        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="passengers">Passengers</label>
          <select
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4+ Passengers</option>
          </select>
        </motion.div>

        <motion.div className="form-group form-full-width">
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(90deg, #ff6a00, #ee0979)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Search Buses
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default BusServicePage;
