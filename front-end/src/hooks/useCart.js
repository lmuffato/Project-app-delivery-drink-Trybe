import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartQuantity] = useState(() => {
    const storagedCart = localStorage.getItem('carrinho');
    if (storagedCart) {
      return JSON.parse(storagedCart).length;
    }
    return [];
  });

  const updateTotalPrice = () => {
    const storagedCart = localStorage.getItem('carrinho');
    setCartTotalPrice(JSON.parse(storagedCart)
      .reduce((acc, elem) => acc + elem.quantity * elem.price));
  };

  const updateCart = (id, name, price, param) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const actualCart = cart.find((elem) => elem.id === id);
    let product;
    if (param === '+') {
      product = {
        id,
        name,
        price,
        quantity: actualCart.quantity + 1,
      };
    }
    if (actualCart.quantity > 0 && param === '-') {
      product = {
        id,
        name,
        price,
        quantity: actualCart.quantity - 1,
      };
    }
    if (actualCart.quantity === 1 && param === '-') {
      const newCart = cart.filter((productElem) => productElem.id !== id);
      localStorage.setItem('carrinho', JSON.stringify(newCart));
      return;
    }
    const newArrayOfProducts = cart
      .map((productElem) => {
        if (productElem.id === id) {
          return product;
        }
        return productElem;
      });
    localStorage.setItem('carrinho', JSON.stringify(newArrayOfProducts));
  };

  const addToCart = (id, name, price) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart) {
      console.log(cart);
      const product = {
        id,
        name,
        price,
        quantity: 1,
      };
      const arrayOfProducts = JSON.stringify([product]);
      localStorage.setItem('carrinho', arrayOfProducts);
      updateTotalPrice();
      return;
    }
    if (cart.every((elem) => elem.id !== id)) {
      const product = {
        id,
        name,
        price,
        quantity: 1,
      };
      const arrayOfProducts = JSON.stringify([...cart, product]);
      localStorage.setItem('carrinho', arrayOfProducts);
      updateTotalPrice();
      return;
    }
    updateCart(id, name, price, '+');
  };

  const removeProdCart = (id, name, price) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) return;
    updateTotalPrice();
    updateCart(id, name, price, '-');
  };

  return (
    <CartContext.Provider
      value={ { cartQuantity, cartTotalPrice, addToCart, removeProdCart } }
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

CartProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
