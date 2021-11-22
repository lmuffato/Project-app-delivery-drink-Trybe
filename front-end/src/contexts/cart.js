import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const cartContext = createContext({ cartItens: [],
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);

  const increaseQuantity = (title, price) => {
    const cartItem = cartItens.find((item) => item.title === title);
    if (cartItem) {
      cartItem.quantity += 1;
      cartItem.subTotal = cartItem.quantity * price;
      const updated = [...cartItens, cartItem];
      setCartItens(updated);
    }
    console.log(cartItens);
    setCartItens([...cartItens, {
      title,
      quantity: 1,
      unitaryPrice: price,
      subTotal: price,
    }]);
  };

  const decreaseQuantity = (title, price) => {
    const cartItem = cartItens.find((item) => item.title === title);
    if (cartItem.quantity === 0) {
      cartItem.quantity = 0;
    }
    cartItem.quantity -= 1;
    cartItem.subTotal = cartItem.quantity * price;
    setCartItens([...cartItens, cartItem]);
  };

  return (
    <cartContext.Provider value={ { cartItens, increaseQuantity, decreaseQuantity } }>
      { children }
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
