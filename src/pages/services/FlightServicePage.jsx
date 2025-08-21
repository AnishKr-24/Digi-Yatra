
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    alert(`Searching for ${tripType} flights from ${formData.from} to ${formData.to} on ${formData.departureDate}.`);
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
    hover: { scale: 1.02, transition: { duration: 0.4 } }
  };

  // Card hover animation
  const cardHover = {
    hover: { scale: 1.05, y: -8, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // yahan flight image ka link daal do
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        perspective: '1000px'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Overlay card */}
      <motion.div 
        className="card p-4 shadow"
        style={{ 
          backgroundColor: 'rgba(0,0,0,0.55)', 
          color: '#fff', 
          maxWidth: '550px', 
          width: '100%',
          borderRadius: '15px'
        }}
        variants={cardHover}
        whileHover="hover"
      >
        <motion.h1 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          Book Your Flight
        </motion.h1>

        {/* Trip Type Tabs */}
        <div className="d-flex justify-content-center mb-3 gap-2">
          <button 
            type="button"
            className={`btn ${tripType === 'one-way' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setTripType('one-way')}
          >
            One Way
          </button>
          <button
            type="button"
            className={`btn ${tripType === 'round-trip' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setTripType('round-trip')}
          >
            Round Trip
          </button>
        </div>

        <motion.form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="From City"
                name="from"
                value={formData.from}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="To City"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                min={minDate}
                required
              />
            </div>
            {tripType === 'round-trip' && (
              <div className="col">
                <input
                  type="date"
                  className="form-control"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={minDate}
                  required
                />
              </div>
            )}
            <div className="col">
              <select
                className="form-select"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn w-100"
            style={{
              background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold'
            }}
            whileHover={{ scale: 1.07, boxShadow: '0 12px 28px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Search Flights ✈️
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default FlightServicePage;
