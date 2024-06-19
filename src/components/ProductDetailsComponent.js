import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDetailsComponent = ({ addToCart }) => {
  const { id } = useParams();

  // Replace this with actual product fetching logic
  const products = [
    { id: 1, name: 'Product 1', price: 50, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 30, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 70, description: 'Description for Product 3' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

ProductDetailsComponent.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetailsComponent;
