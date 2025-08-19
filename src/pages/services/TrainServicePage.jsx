// src/pages/services/TrainServicePage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TrainServicePage.scss';

const TrainServicePage = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    class: 'all'
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
    console.log("Searching for trains with data:", formData);
    alert(`Searching for trains from ${formData.from} to ${formData.to} on ${formData.date} with class ${formData.class}.`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="train-service-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="train-service-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Book Your Train Ticket
      </motion.h1>

      <motion.div 
        className="train-booking-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
      >
        <form className="train-booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <motion.div className="form-group-train" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="from-train">From Station</label>
              <input type="text" id="from-train" name="from" value={formData.from} onChange={handleChange} placeholder="e.g., New Delhi" required/>
            </motion.div>
            <motion.div className="form-group-train" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="to-train">To Station</label>
              <input type="text" id="to-train" name="to" value={formData.to} onChange={handleChange} placeholder="e.g., Patna Jn" required/>
            </motion.div>
          </div>

          <div className="form-row">
            <motion.div className="form-group-train" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="date-train">Date of Journey</label>
              <input type="date" id="date-train" name="date" value={formData.date} onChange={handleChange} min={minDate} required/>
            </motion.div>
            <motion.div className="form-group-train" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="class-train">Class</label>
              <select id="class-train" name="class" value={formData.class} onChange={handleChange}>
                <option value="all">All Classes</option>
                <option value="1a">1A - First AC</option>
                <option value="2a">2A - Second AC</option>
                <option value="3a">3A - Third AC</option>
                <option value="sl">SL - Sleeper</option>
              </select>
            </motion.div>
          </div>

          <motion.div className="form-group form-full-width">
            <motion.button
              type="submit"
              className="search-button-train"
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Search Trains 🚆
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default TrainServicePage;
