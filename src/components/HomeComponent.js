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
    navigate('/product-list');
  };

  return (
    <div>
     <div className="scrolling-text-container">
     <div className="scrolling-text-inner" style={{ '--marquee-speed': '10ss', '--direction': 'scroll-left' }} role="marquee">
        <div className="scrolling-text">
            <div className="scrolling-text-item">Welcome to Pharma App!</div>
        </div>
    </div>
</div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/images/homepageBanner1.png" className="d-block w-100" alt="..."/>
            <button className="btn btn-primary" onClick={navigateToProductDetails}>Go to Product Details</button>
            </div>
            <div className="carousel-item">
            <img src="/images/HomePageBanner1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="/images/HomePageBanner2.png" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/home/sub">Home Sub Component</Link>
        </li>
      </ul>
      <Routes>
        <Route path="sub" element={<HomeSubComponent />} />
      </Routes>
    </div>
  );
};

export default HomeComponent;
