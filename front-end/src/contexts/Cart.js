import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrinho')));
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem('total') || 0));

  return (
    <CartContext.Provider value={ { cart, setCart, total, setTotal } }>
      { children }
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
