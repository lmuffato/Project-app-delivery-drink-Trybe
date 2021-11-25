import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  const getCar = () => {
    const localCart = JSON.parse(localStorage.getItem('carrinho'));
    return localCart;
  };

  const totalCartPrice = () => {
    const cart = getCar();
    if (cart && cart.length !== 0) {
      const total = cart
        .reduce((acc, elem) => acc + elem.quantity * +elem.price, 0).toFixed(2);
      console.log(total);
      setTotalValue(+total);
      return;
    }
    setTotalValue(0);
  };

  useEffect(() => {
    totalCartPrice();
  }, []);

  const updateCart = (id, name, price, param) => {
    const cart = getCar();
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
    console.log('New array', newArrayOfProducts);
    localStorage.setItem('carrinho', JSON.stringify(newArrayOfProducts));
    totalCartPrice();
  };

  const addToCart = (id, name, price) => {
    const cart = getCar();
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

  const manualEntry = (id, name, price, quantity) => {
    const cart = getCar();
    const productUpdate = { id, name, price, quantity };
    console.log('Entrei aqui no carrinho entry', id, name, price, quantity);

    if (!cart) {
      localStorage.setItem('carrinho', JSON.stringify([productUpdate]));
      totalCartPrice();
      return;
    }

    if (quantity === 0 || quantity < 0) {
      const newCart = cart.filter((productElem) => productElem.id !== id);
      localStorage.setItem('carrinho', JSON.stringify(newCart));
      totalCartPrice();
      return;
    }

    if (cart.every((elem) => elem.id !== id)) {
      console.log('Entrei no every');
      const product = {
        id,
        name,
        price,
        quantity,
      };

      const arrayOfProducts = JSON.stringify([...cart, product]);
      localStorage.setItem('carrinho', arrayOfProducts);
      totalCartPrice();
      return;
    }

    const newArrayOfProducts = cart
      .map((productElem) => {
        if (productElem.id === id) {
          return productUpdate;
        }
        return productElem;
      });

    localStorage.setItem('carrinho', JSON.stringify(newArrayOfProducts));
    totalCartPrice();
  };

  const removeProdCart = (id, name, price) => {
    const cart = getCar();
    if (!cart || cart.every((elem) => elem.id !== id)) return;
    totalCartPrice();
    updateCart(id, name, price, '-');
  };

  const removeTotalItem = (id) => {
    const cart = getCar();
    const newCart = cart.filter((productElem) => productElem.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
    totalCartPrice();
  };

  return (
    <CartContext.Provider
      value={ { totalValue, addToCart, removeProdCart, manualEntry, removeTotalItem } }
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
