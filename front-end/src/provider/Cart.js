import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [cartStorage, setCartStorage] = useState();
  const [totalCart, setTotalCart] = useState('0.00');

  const updateStorage = (id, item) => {
    let storage = JSON.parse(localStorage.getItem('carrinho'));

    if (storage) {
      storage[id] = item;

      if (item.quantity === 0) {
        delete storage[id];
      } else {
        storage[id] = item;
      }

      localStorage.setItem('carrinho', JSON.stringify(storage));
    } else {
      storage = { [id]: item };
      localStorage.setItem('carrinho', JSON.stringify(storage));
    }
    setCartStorage(storage);
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    setCartStorage(storage);

    if (cart) {
      updateStorage(cart.id, cart.item);
    }
  }, [cart]);

  useEffect(() => {
    if (cartStorage) {
      let value = Object.values(cartStorage)
        .map((item) => item.subTotal)
        .reduce((acc, item) => acc + Number(item), 0);

      value = parseFloat(value).toFixed(2).replace('.', ',');

      setTotalCart(value);
    }
  }, [cartStorage]);

  const context = { cart, setCart, cartStorage, setCartStorage, totalCart };
  return (
    <CartContext.Provider value={ context }>{children}</CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
