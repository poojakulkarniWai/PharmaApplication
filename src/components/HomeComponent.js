// src/components/HomeComponent.js
import React, { useState } from 'react';
import { Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';

const HomeComponent = () => {
  const [cart, setCart] = useState([]);
  const navigate  = useNavigate();

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Pharma App</p>
      <button onClick={() => navigate('/product-details')}>Go to Product Details</button>
      <ul>
        <li><Link to="/home/sub">Home Sub Component</Link></li>
      </ul>
      <Route path="/home/sub" component={() => <div><h2>Home Sub Component</h2></div>} />
      <ProductList addToCart={addToCart} />
      <Cart />
    </div>
  );
};

export default HomeComponent;
