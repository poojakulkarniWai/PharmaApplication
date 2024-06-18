import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/product-details" component={ProductDetailsComponent} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
