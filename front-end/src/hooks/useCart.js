import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  const totalCartPrice = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (cart && cart.length !== 0) {
      const total = cart.reduce((acc, elem) => acc + elem.quantity * +elem.price, 0);
      setTotalValue(+total.toFixed(2));
      return;
    }
    setTotalValue(0);
  };

  useEffect(() => {
    totalCartPrice();
  }, []);

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
      totalCartPrice();
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
    totalCartPrice();
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
      totalCartPrice();
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
      totalCartPrice();
      return;
    }
    updateCart(id, name, price, '+');
  };

  const removeProdCart = (id, name, price) => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart || cart.every((elem) => elem.id !== id)) return;
    totalCartPrice();
    updateCart(id, name, price, '-');
  };

  return (
    <CartContext.Provider
      value={ { totalValue, addToCart, removeProdCart } }
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
