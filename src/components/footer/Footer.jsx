import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  // Show footer only on Home and About pages
  if (location.pathname !== "/" && location.pathname !== "/about") {
    return null;
  }

  // Button Style
  const gradientBtn = {
    background: isHovered
      ? "linear-gradient(90deg, #00c6ff, #0072ff)"
      : "linear-gradient(90deg, #004e92, #000428)",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    color: "#fff",
    fontWeight: "600",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 4px 12px rgba(0, 0, 0, 0.3)" : "none",
  };

  // Card Style
  const cardStyle = {
    borderRadius: "16px",
    maxWidth: "900px",
    backgroundColor: cardHovered ? "#f0f8ff" : "#ffffff",
    transition: "all 0.3s ease",
    boxShadow: cardHovered
      ? "0px 6px 20px rgba(0, 0, 0, 0.2)"
      : "0px 2px 8px rgba(0, 0, 0, 0.1)",
    transform: cardHovered ? "scale(1.02)" : "scale(1)",
  };

  return (
    <section className="py-4 bg-light">
      <Container>
        <Card
          className="shadow-sm border-0 text-center p-5 mx-auto"
          style={cardStyle}
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
        >
          <h3 className="fw-bold mb-2">Frequently Asked Questions</h3>
          <p className="text-muted mb-4">
            Find quick answers to common questions about booking, cancellation, and more.
          </p>
          <Button
            as={Link}
            to="/"
            style={gradientBtn}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View FAQ
          </Button>
        </Card>
      </Container>
    </section>
  );
};

export default Footer;
