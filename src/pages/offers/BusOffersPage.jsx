

import React from "react";
import { motion } from "framer-motion";
import "./BusOffersPage.scss";
import Card from "../../components/common/Card";
import { busOffers } from "../../data";

const BusOffersPage = () => {
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
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      className="bus-offers-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="bus-offers-title">✨ Exclusive Bus Offers</h1>

      <motion.div
        className="offers-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {busOffers.map((offer) => (
          <motion.div
            key={offer.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card className="offer-card">
              <div className="card-image-container">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="card-content">
                <div>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
                <motion.a
                  href="#"
                  className="cta-button"
                  whileHover={{
                    scale: 1.1,
                    background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now 🚍
                </motion.a>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BusOffersPage;
