

import React from "react";
import { motion } from "framer-motion";
import "./FlightOffersPage.scss";
import Card from "../../components/common/Card";
import { flightOffers } from "../../data";

const FlightOffersPage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="flight-offers-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="flight-offers-title">✈ Discover Our Flight Deals</h1>

      <motion.div
        className="offers-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {flightOffers.map((offer) => (
          <motion.div
            key={offer.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card className="flight-card">
              <div className="card-header">
                <img
                  className="airline-logo"
                  src={offer.airlineLogo}
                  alt="Airline Logo"
                />
                <h3>{offer.title}</h3>
                <p className="destination">{offer.destination}</p>
              </div>

              <div className="card-body">
                <ul>
                  {offer.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <span className="price">{offer.price}</span>
                <motion.a
                  href="#"
                  className="book-button"
                  whileHover={{
                    scale: 1.1,
                    background:
                      "linear-gradient(90deg, #ff416c, #ff4b2b)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now ✈
                </motion.a>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FlightOffersPage;
