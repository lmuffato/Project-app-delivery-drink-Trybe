import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const updateStorage = () => {
    localStorage.setItem('carrinho', JSON.stringify(cart));
  };

  useEffect(() => {
    const cartKeys = Object.keys(cart);
    if (cartKeys.length) {
      updateStorage();
    }
  }, [cart]);

  const context = { cart, setCart };
  return (
    <CartContext.Provider value={ context }>{children}</CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
