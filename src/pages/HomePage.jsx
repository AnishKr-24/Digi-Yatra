
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";
import NeedHelp from "../components/needhelp/NeedHelp";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomePage = () => {
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50 },
    },
    exit: { opacity: 0, x: "100vw", transition: { ease: "easeInOut" } },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const gradientBtn = {
    background: "linear-gradient(90deg, #004e92, #000428)",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    color: "#fff",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease",
  };

  //  Card hover style
  const cardHoverStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <motion.div
      className="homepage-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/*  Hero Section */}
      <Hero
        title="Your Journey Starts Here"
        subtitle="Book your Bus, Train, and Flight tickets with ease and get the best deals."
        ctaText="Book Now"
        ctaLink="/auth" 
      />

      {/*  Services Section */}
      <motion.section
        className="services-section py-5"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Container>
          <h2 className="text-center fw-bold mb-2">Explore Our Services</h2>
          <p className="text-center text-muted mb-5">
            Choose from our comprehensive travel booking options
          </p>

          <Row className="g-4 text-center align-items-center justify-content-center">
            {/*  Bus */}
            <Col md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  className="h-100 shadow-sm border-0 text-center p-4 rounded-4"
                  style={cardHoverStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #e0f7fa, #ffffff)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(135deg, #007bff, #00c6ff)",
                      }}
                    >
                      <img
                        src="https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-blue-bus-icon-cartoon-vector-png-image_6192342.png"
                        alt="Bus"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">Bus Tickets</Card.Title>
                    <Card.Text className="text-muted">
                      Book bus tickets online for all major routes across India
                      with great offers.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Link to="/services/bus">
                        <Button
                          style={gradientBtn}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #0061ff, #60efff)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #004e92, #000428)";
                          }}
                        >
                          Find a Bus <span>&rarr;</span>
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Train */}
            <Col md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  className="h-100 shadow-sm border-0 text-center p-4 rounded-4"
                  style={cardHoverStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #e0f7fa, #ffffff)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(135deg, #007bff, #00c6ff)",
                      }}
                    >
                      <img
                        src="https://s.tmimgcdn.com/scr/1200x750/303400/train-logo-vector-illustration-design-fast-train-logo-4_303440-original.jpg"
                        alt="Train"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">Train Tickets</Card.Title>
                    <Card.Text className="text-muted">
                      Find and book train tickets for your journey. Get real-time
                      status updates.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Link to="/services/train">
                        <Button
                          style={gradientBtn}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #0061ff, #60efff)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #004e92, #000428)";
                          }}
                        >
                          Find a Train <span>&rarr;</span>
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/*  Flight */}
            <Col md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  className="h-100 shadow-sm border-0 text-center p-4 rounded-4"
                  style={cardHoverStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #e0f7fa, #ffffff)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(135deg, #007bff, #00c6ff)",
                      }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYAgJtGe3jeaM8G76P6jDwQAoX7ffJBgh5w&s"
                        alt="Flight"
                        style={{ width: "28px", height: "28px" }}
                      />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">Flight Tickets</Card.Title>
                    <Card.Text className="text-muted">
                      Get the best deals on domestic and international flight
                      bookings.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Link to="/services/flight">
                        <Button
                          style={gradientBtn}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #0061ff, #60efff)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background =
                              "linear-gradient(90deg, #004e92, #000428)";
                          }}
                        >
                          Find a Flight <span>&rarr;</span>
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Need Help Section */}
      <NeedHelp />
    </motion.div>
  );
};

export default HomePage;
