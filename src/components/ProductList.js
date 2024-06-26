import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductList = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50, image: '/images/Products/Product1.jfif' },
    { id: 2, name: 'Product 2', price: 30, image: '/images/Products/Product2.jfif' },
    { id: 3, name: 'Product 3', price: 70, image: '/images/Products/Product3.jfif' },
  ]);

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('price-asc');

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'price-asc' ? a.price - b.price : b.price - a.price));

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="form-group row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select className="form-control" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price-asc">Sort by Price: Low to High</option>
            <option value="price-desc">Sort by Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4 mt-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/product-details/${product.id}`}>
                    {product.name}
                  </Link>
                </h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
