import React from "react";
import { motion } from "framer-motion";
import travelHero from "@/assets/Image1.jpg";
import teamCeo from "@/assets/image2.jpg";

const About = () => {
  const values = [
    { title: "Trust", desc: "Reliable relationships and transparent pricing", color: "bg-info", hoverColor: "bg-light" },
    { title: "Innovation", desc: "Cutting-edge technology solutions", color: "bg-warning", hoverColor: "bg-light" },
    { title: "Excellence", desc: "Exceeding expectations every time", color: "bg-primary text-white", hoverColor: "bg-secondary text-white" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative text-center text-white" style={{ height: "60vh" }}>
        <img
          src={travelHero}
          alt="Hero"
          className="w-100 h-100 object-fit-cover opacity-25"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4 fw-bold"
          >
            About <span className="text-info">Digi Yatra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lead"
          >
            Your trusted partner for seamless and hassle-free travel bookings.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <motion.div
                className="p-4 rounded shadow"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  backgroundColor: "#cce5ff"
                }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-primary fw-bold mb-3">Our Mission</h2>
                <p>
                  To empower travelers with a reliable and efficient platform that makes
                  journey planning easy and accessible for everyone. Transparent pricing,
                  excellent support, and innovative solutions.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="p-4 text-center text-white rounded shadow"
                style={{ background: "linear-gradient(45deg, #0dcaf0, #6610f2)" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  background: "linear-gradient(45deg, #66d9ff, #9933ff)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="fs-1 fw-bold">1M+</div>
                <div className="fs-5">Happy Travelers</div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-5"
        >
          <h2 className="text-center text-primary fw-bold mb-4">Meet Our Team</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {["Abc", "Xyz"].map((name, idx) => (
              <div key={idx} className="col">
                <motion.div
                  className="card text-center border-0 shadow h-100"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    backgroundColor: idx === 0 ? "#cce5ff" : "#d1ecf1"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={teamCeo} alt={name} className="card-img-top rounded-circle mx-auto mt-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className={`card-title fw-bold ${idx === 0 ? "text-primary" : "text-info"}`}>{name}</h5>
                    <p className="card-text text-muted">{idx === 0 ? "Founder & CEO" : "Head of Operations"}</p>
                    <p className="card-text">{idx === 0 ? "Passionate about revolutionizing travel." : "Expert in streamlining operations for seamless experiences."}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section className="my-5">
          <div className="row align-items-center g-4">
            <div className="col-md-6 order-md-2">
              <motion.div
                className="p-4 text-white rounded shadow"
                style={{ background: "linear-gradient(45deg, #ffc107, #fd7e14)" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  background: "linear-gradient(45deg, #ffd966, #ff8c42)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex justify-content-around">
                  <div>
                    <div className="fs-2 fw-bold">2025</div>
                    <div className="small">Founded</div>
                  </div>
                  <div>
                    <div className="fs-2 fw-bold">50+</div>
                    <div className="small">Destinations</div>
                  </div>
                  <div>
                    <div className="fs-2 fw-bold">24/7</div>
                    <div className="small">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-md-6 order-md-1">
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "#e2e3e5" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-primary fw-bold mb-3">Our Journey</h2>
                <p>Founded in 2025, Digi Yatra started with a simple idea to bring all travel services under one roof. Constantly innovating for better experiences.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section className="my-5">
          <h2 className="text-center text-primary fw-bold mb-4">Our Values</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {values.map((val, idx) => (
              <div key={idx} className="col">
                <motion.div
                  className={`card text-center p-4 h-100 ${val.color}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    backgroundColor: val.hoverColor
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3 rounded-circle bg-white mx-auto" style={{ width: "50px", height: "50px" }}></div>
                  <h5 className="fw-bold">{val.title}</h5>
                  <p>{val.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;
