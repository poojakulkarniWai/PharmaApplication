// src/components/ProductList.js
import React, { useState } from 'react';

const ProductList = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 70 },
  ]);

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('price-asc');

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'price-asc' ? a.price - b.price : b.price - a.price));

  return (
    <div>
      <h2>Product List</h2>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="price-asc">Sort by Price: Low to High</option>
          <option value="price-desc">Sort by Price: High to Low</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
