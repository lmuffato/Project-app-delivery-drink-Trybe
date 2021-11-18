import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import ProductsContext from './ProductsContext';
import { fetchProducts } from '../../utils/API/fetch';

export default function UserProvider({ children }) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  console.log('line 9 ~ UserProvider ~ products', products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const getProducts = await fetchProducts({ token: 'xablau' });
      const newProducts = getProducts.map((product) => ({ ...product, count: 0 }));
      setProducts(newProducts);
    })();
  }, []);

  const BRL = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const increment = ({ target: { id } }) => {
    console.log(id);
    products[id - 1].count += 1;
    setCount(count + 1);
    const price = products.filter((prod) => prod.id === parseFloat(id))
      .map((prod) => prod.price);
    setTotalPrice(price * products[id - 1].count);
  };

  const handleChange = (e) => {
    e.target.value = count;
  };

  const decrement = (e) => {
    if (products[e.target.id - 1].count > 0) {
      products[e.target.id - 1].count -= 1;
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
    totalPrice,
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
