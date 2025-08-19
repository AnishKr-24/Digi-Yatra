
import React from "react";
import { motion } from "framer-motion";
import "./TrainOffersPage.scss";
import Card from "../../components/common/Card";
import { trainOffers } from "../../data";

const TrainOffersPage = () => {
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
      className="train-offers-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="train-offers-title">🚆 Exclusive Train Offers</h1>

      <motion.div
        className="train-offers-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {trainOffers.map((offer) => (
          <motion.div
            key={offer.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card className="train-offer-card">
              <div className="card-header">
                <h4>{offer.title}</h4>
              </div>
              <div className="card-body">
                <ul>
                  {offer.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <div className="offer-price">{offer.price}</div>
                <motion.a
                  href="#"
                  className="book-button"
                  whileHover={{
                    scale: 1.1,
                    background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now 🚆
                </motion.a>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrainOffersPage;
