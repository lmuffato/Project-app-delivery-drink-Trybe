import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import ProductsContext from './ProductsContext';
import { fetchProducts } from '../../utils/API/fetch';

export default function UserProvider({ children }) {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const getProducts = await fetchProducts({ token: 'xablau' });
      setProducts(getProducts);
    })();
  }, []);

  const BRL = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const increment = (e) => {
    console.log(e.target);
    setCount(count + 1);
  };

  const handleChange = (e) => {
    e.target.value = count;
  };

  const decrement = () => {
    if (count > 1) {
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
