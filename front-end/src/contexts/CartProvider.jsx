import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart);

  return (
    <CartContext.Provider
      value={
        {
          totalPrice,
          setTotalPrice,
          cart,
          setCart }
      }
    >
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
