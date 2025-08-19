

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import HomePage from './pages/HomePage';
import BusOffersPage from './pages/offers/BusOffersPage';
import TrainOffersPage from './pages/offers/TrainOffersPage';
import FlightOffersPage from './pages/offers/FlightOffersPage';
import BusServicePage from './pages/services/BusServicePage';
import TrainServicePage from './pages/services/TrainServicePage';
import FlightServicePage from './pages/services/FlightServicePage';
import NotFoundPage from './pages/NotFoundPage';
import About from './components/about/About'; 
import AuthPage from './components/auth/AuthPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offers/bus" element={<BusOffersPage />} />
          <Route path="/offers/train" element={<TrainOffersPage />} />
          <Route path="/offers/flight" element={<FlightOffersPage />} />
          <Route path="/services/bus" element={<BusServicePage />} />
          <Route path="/services/train" element={<TrainServicePage />} />
          <Route path="/services/flight" element={<FlightServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
