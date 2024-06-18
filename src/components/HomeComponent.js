// src/components/HomeComponent.js
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const HomeSubComponent = () => (
  <div>
    <h2>Home Sub Component</h2>
  </div>
);

const HomeComponent = () => {
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate('/product-details');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Pharma App</p>
      <button onClick={navigateToProductDetails}>Go to Product Details</button>
      <ul>
        <li><Link to="/home/sub">Home Sub Component</Link></li>
      </ul>
      <Routes>
        <Route path="sub" element={<HomeSubComponent />} />
      </Routes>
    </div>
  );
};

export default HomeComponent;
