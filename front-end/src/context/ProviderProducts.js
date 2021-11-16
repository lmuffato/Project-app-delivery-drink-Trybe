import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextProducts from './ContextProducts';

const axios = require('axios').default;

function ProviderProducts({ children }) {
  const [allProducts, setAllProducts] = useState([{}]);
  const urlBase = 'http://localhost:3001';

  const findProducts = async () => {
    const { data: { products } } = await axios.get(`${urlBase}/products`);
    setAllProducts(products);
    return products;
  };

  return (
    <ContextProducts.Provider
      value={ {
        findProducts,
        allProducts,
      } }
    >
      {children}
    </ContextProducts.Provider>
  );
}

ProviderProducts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderProducts;
