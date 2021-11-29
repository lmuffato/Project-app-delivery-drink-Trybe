import React, { useState, useEffect } from 'react';
import { shape } from 'prop-types';
import ProductsContext from '../context/ProductsContext';
import getAllProducts from '../services/getAllProducts';

export default function ProductsProvider({ children }) {
  const [productsResult, setProductsResult] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [totalCart, setTotalCart] = useState(0);
  const [productsCart, setProductsCart] = useState([]);

  const value = {
    values: {
      productsResult,
      isFetching,
      productsCart,
      totalCart,
    },
    actions: {
      setProductsResult,
      setProductsCart,
      setTotalCart,
    },
  };

  useEffect(() => {
    const valorInicial = 0;
    const totalAmountCustomer = productsCart
      .reduce((acc, { total }) => acc + parseFloat(total), valorInicial);
    localStorage.setItem('totalAmountCustomer', JSON.stringify(totalAmountCustomer));
    setTotalCart(totalAmountCustomer);
  }, [productsCart]);

  useEffect(() => {
    const fetchAllProducts = () => {
      setIsFetching(true);
      getAllProducts()
        .then((response) => setProductsResult(response))
        .catch((error) => console.log(error.message))
        .finally(() => setIsFetching(false));
    };
    fetchAllProducts();
  }, []);

  return (
    <ProductsContext.Provider value={ value }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: shape(),
}.isRequired;
