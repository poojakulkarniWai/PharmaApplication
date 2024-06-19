import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductDetailsComponent.css';

const ProductDetailsComponent = ({ addToCart }) => {
  const { id } = useParams();

  // Replace this with actual product fetching logic
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 50, 
      description: 'Detailed description for Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      image: '/images/Products/Product1.jfif', 
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Great product!' },
        { user: 'Bob', rating: 4, comment: 'Very useful.' }
      ]
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 30, 
      description: 'Detailed description for Product 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      image: '/images/Products/Product2.jfif', 
      reviews: [
        { user: 'Charlie', rating: 3, comment: 'Average quality.' },
        { user: 'Dave', rating: 2, comment: 'Not what I expected.' }
      ]
    },
    { 
      id: 3, 
      name: 'Product 3', 
      price: 70, 
      description: 'Detailed description for Product 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      image: '/images/Products/Product3.jfif', 
      reviews: [
        { user: 'Eve', rating: 4, comment: 'Good value for money.' },
        { user: 'Frank', rating: 5, comment: 'Exceeded expectations!' }
      ]
    },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Price: ${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary mb-3" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <hr />
          <h4>Reviews</h4>
          {product.reviews.length > 0 ? (
            <ul className="list-unstyled">
              {product.reviews.map((review, index) => (
                <li key={index} className="mb-3">
                  <strong>{review.user}</strong>
                  <p>Rating: {review.rating} / 5</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProductDetailsComponent.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetailsComponent;
