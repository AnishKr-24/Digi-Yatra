import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NeedHelp = ({
  items = [
    {
      title: "Call Us",
      desc: "Speak directly with our travel experts",
      icon: "https://cdn.vectorstock.com/i/1000v/91/67/call-app-caller-icon-editable-logo-vector-45389167.jpg",
      to: "/support/call",
      cta: "Call Now",
    },
    {
      title: "Live Chat",
      desc: "Get instant answers to your questions",
      icon: "https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg",
      to: "/support/chat",
      cta: "Start Chat",
    },
    {
      title: "Email Support",
      desc: "Send us your queries anytime",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHMNUl5Bo34gIDJnHk4Tqr8F_UipvjgdptA&s",
      to: "/support/email",
      cta: "Send Email",
    },
    {
      title: "24/7 Available",
      desc: "Round-the-clock customer support",
      icon: "https://www.shutterstock.com/shutterstock/photos/1907435269/display_1500/stock-vector--vector-icon-sign-for-order-execution-or-delivery-service-1907435269.jpg",
      to: "/support",
      cta: "Learn More",
    },
  ],
}) => {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <h2 className="fw-bold text-center mb-2">Need Help?</h2>
        <p className="text-muted text-center mb-5">
          Our travel experts are here to assist you 24/7. Get support whenever
          you need it.
        </p>

        {/* Cards */}
        <Row className="g-4">
          {items.map((h, i) => (
            <Col md={3} sm={6} xs={12} key={i}>
              <Card
                className="h-100 border-0 text-center p-3"
                style={{
                  transition: "all 0.3s ease",
                  borderRadius: "16px",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.backgroundColor = "#f0f8ff"; 
                  e.currentTarget.style.boxShadow =
                    "0px 6px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.boxShadow =
                    "0px 2px 8px rgba(0,0,0,0.1)";
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  {/* Icon */}
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, #007bff, #00c6ff)",
                    }}
                  >
                    <img
                      src={h.icon}
                      alt={h.title}
                      style={{ width: "28px", height: "28px" }}
                    />
                  </div>

                  {/* Title */}
                  <Card.Title className="fw-semibold">{h.title}</Card.Title>

                  {/* Description */}
                  <Card.Text className="text-muted flex-grow-1">
                    {h.desc}
                  </Card.Text>

                  {/* CTA Button */}
                  <Link to={h.to}>
                    <Button
                      style={{
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
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                        e.currentTarget.style.background =
                          "linear-gradient(90deg, #00c6ff, #0072ff)";
                        e.currentTarget.style.boxShadow =
                          "0px 4px 12px rgba(0,0,0,0.3)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background =
                          "linear-gradient(90deg, #004e92, #000428)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {h.cta} <span style={{ fontSize: "16px" }}>→</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NeedHelp;
