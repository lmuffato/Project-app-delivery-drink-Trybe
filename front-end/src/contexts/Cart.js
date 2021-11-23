import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    JSON.parse(localStorage.getItem('carrinho'))
    || undefined,
  ]);
  // const [cart, setCart] = useState(undefined);

  return (
    <CartContext.Provider value={ { cart, setCart } }>
      { children }
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
