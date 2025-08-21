
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    alert(`Searching for buses from ${formData.from} to ${formData.to} on ${formData.date} for ${formData.passengers} passengers.`);
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
        backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // yahan bus image ka link daal do
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
          maxWidth: '500px', 
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
          Book Your Bus Ticket
        </motion.h1>

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
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
                required
              />
            </div>
            <div className="col">
              <select
                className="form-select"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4+ Passengers</option>
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
            Search Buses 🚌
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default BusServicePage;
