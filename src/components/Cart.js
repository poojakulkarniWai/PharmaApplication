import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <img src="/images/empty_cart.jpg" className="d-block w-100" alt="..."/>

      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name} - ${item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
