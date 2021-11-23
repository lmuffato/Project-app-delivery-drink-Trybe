import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../Products/ProductsContext';
import SaleContext from './SaleContext';

export default function SaleProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const { setTotalPrice } = useContext(ProductsContext);
  cart = JSON.parse(localStorage.getItem('carrinho'));
  useEffect(() => {
    (() => {
      setShoppingCart(cart);
    })();
  }, []);
  const removeItem = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(cart));
    setShoppingCart(cart);
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.count * Number(item.price);
      return totalPrice;
    });
    setTotalPrice(totalPrice);
  }

  const context = {
    shoppingCart,
    removeItem,
  };
  return (
    <SaleContext.Provider value={ context }>
      {children}
    </SaleContext.Provider>
  );
};
