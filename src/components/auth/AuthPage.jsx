
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AuthPage.scss";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in with email: ${formData.email}`);
      navigate("/dashboard");
    } else {
      alert(`Signing up with email: ${formData.email}`);
      navigate("/welcome");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
          )}
          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="auth-button"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
