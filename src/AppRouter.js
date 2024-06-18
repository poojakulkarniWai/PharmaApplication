// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ProductDetailsComponent from './components/ProductDetailsComponent';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product-details">Product Details</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/product-details/*" element={<ProductDetailsComponent />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
