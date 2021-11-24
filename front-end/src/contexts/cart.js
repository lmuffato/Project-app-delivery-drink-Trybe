import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const cartContext = createContext({ cartItens: [],
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);

  const increaseQuantity = ({ id, title, price }) => {
    const cartItem = cartItens.find((item) => item.id === id);
    if (cartItem) {
      const updated = cartItens.map((item) => {
        if (item.id === cartItem.id) {
          item.quantity += 1;
          item.subTotal = Number(cartItem.quantity * cartItem.price).toFixed(2);
        }
        return item;
      });
      setCartItens(updated);
    } else {
      setCartItens([...cartItens, {
        id,
        title,
        quantity: 1,
        price: Number(price).toFixed(2),
        subTotal: Number(price).toFixed(2),
      }]);
    }
  };

  const decreaseQuantity = ({ id, price }) => {
    const cartItem = cartItens.find((item) => item.id === id);
    if (cartItem && cartItem.quantity > 0) {
      let updated = cartItens.map((item) => {
        if (item.id === id) {
          item.quantity -= 1;
          item.subTotal = Number(cartItem.quantity * price).toFixed(2);
        }
        return item;
      });
      if (cartItem.quantity === 0) updated = cartItens.filter((item) => item.id !== id);
      setCartItens(updated);
    }
  };

  const customizeQuantity = ({ id, title, quantityValue, price }) => {
    const cartItem = cartItens.find((item) => item.id === id);
    if (cartItem) {
      let updated = cartItens.map((item) => {
        if (item.id === id) {
          const customQuantity = quantityValue > 0 ? quantityValue : 0;
          item.quantity = customQuantity;
          item.subTotal = Number(customQuantity * price).toFixed(2);
        }
        return item;
      });
      if (quantityValue === 0) updated = cartItens.filter((item) => item.id !== id);
      setCartItens(updated);
    } else {
      setCartItens([{
        id,
        title,
        quantity: quantityValue,
        price: Number(price).toFixed(2),
        subTotal: Number(Number(price) * quantityValue).toFixed(2),
      }]);
    }
  };

  const removeFromCart = (id) => {
    const cartUpdated = cartItens.filter((item) => item.id !== id);
    setCartItens(cartUpdated);
  };

  return (
    <cartContext.Provider
      value={ {
        cartItens,
        increaseQuantity,
        decreaseQuantity,
        customizeQuantity,
        removeFromCart,
      } }
    >
      { children }
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
