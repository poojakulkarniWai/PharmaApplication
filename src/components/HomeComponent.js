import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const HomeSubComponent = () => (
  <div>
    <h2>Home Sub Component</h2>
  </div>
);

const HomeComponent = () => {
  const history = useHistory();

  const navigateToProductDetails = () => {
    history.push('/product-details');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Pharma App</p>
      <button onClick={navigateToProductDetails}>Go to Product Details</button>
      <ul>
        <li><Link to="/home/sub">Home Sub Component</Link></li>
      </ul>
      <Route path="/home/sub" component={HomeSubComponent} />
    </div>
  );
};

export default HomeComponent;
