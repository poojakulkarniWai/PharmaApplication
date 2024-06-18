// src/components/ProductDetailsComponent.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ProductSubComponent = () => (
  <div>
    <h2>Product Sub Component</h2>
  </div>
);

const ProductDetailsComponent = () => (
  <div>
    <h1>Product Details Page</h1>
    <p>Details about the product will be shown here.</p>
    <ul>
      <li><Link to="/product-details/sub">Product Sub Component</Link></li>
    </ul>
    <Routes>
      <Route path="sub" element={<ProductSubComponent />} />
    </Routes>
  </div>
);

export default ProductDetailsComponent;
