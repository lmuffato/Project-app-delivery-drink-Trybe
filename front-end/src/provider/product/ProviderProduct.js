import React, { useState } from 'react';
import { object } from 'prop-types';

import ContextProduct from './ContextProduct';

function ProviderProduct({ children }) {
  const [products, setProducts] = useState('');

  const context = {
    products,
    setProducts,
  };

  return (
    <ContextProduct.Provider value={ context }>
      { children }
    </ContextProduct.Provider>
  );
}

ProviderProduct.propTypes = {
  children: object,
}.isRequired;

export default ProviderProduct;
