import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(undefined);
  const [total, setTotal] = useState(0.00);

  return (
    <CartContext.Provider value={ { cart, setCart, total, setTotal } }>
      { children }
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
