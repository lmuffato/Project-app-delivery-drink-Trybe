import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';
import fetchAllProducts from '../utils/Data';

function DeliveryProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);

  useEffect(() => {
    fetchAllProducts()
      .then((allProducts) => setProducts(allProducts));
  }, []);

  const contextValue = {
    products,
    quantityProducts,
    setQuantityProducts,
  };

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: node,
}.isRequired;

export default DeliveryProvider;
