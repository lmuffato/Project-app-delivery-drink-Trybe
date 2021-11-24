import React, { useState, useEffect } from 'react';
import { shape } from 'prop-types';
import ProductsContext from '../context/ProductsContext';
import getAllProducts from '../services/getAllProducts';

export default function ProductsProvider({ children }) {
  const [productsResult, setProductsResult] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const value = {
    values: {
      productsResult,
      isFetching,
    },
    actions: {
      setProductsResult,
    },
  };

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
