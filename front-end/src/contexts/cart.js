import React, { createContext, useState } from 'react';

export const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);

  const increaseQuantity = () => {
    const cartItem = cartItens.find((item) => item.title === title);
    if (cartItem) {
      setCartItens(...cartItens,
        cartItem.quantity + 1, cartItem.subtotal = price * quantity);
    }
    setCartItens(...cartItens, {
      title,
      quantity: 1,
      unitaryPrice: price,
      subTotal: price,
    });
  };

  decreaseQuantity = () => {

  };

  return (
    <cartContext.Provider value={ { cartItens, setCartItens, increaseQuantity } }>
      { children }
    </cartContext.Provider>
  );
}
