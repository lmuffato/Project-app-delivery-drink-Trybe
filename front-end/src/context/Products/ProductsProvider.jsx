import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import ProductsContext from './ProductsContext';
import { fetchProducts } from '../../utils/API/fetch';

export default function UserProvider({ children }) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const getProducts = await fetchProducts({ token: 'xablau' });
      setProducts(getProducts);
    })();
  }, []);

  const BRL = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const context = {
    count,
    increment,
    decrement,
    products,
    BRL,
    handleChange,
  };
  return (
    <ProductsContext.Provider value={ context }>
      {children}
    </ProductsContext.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isRequired;
