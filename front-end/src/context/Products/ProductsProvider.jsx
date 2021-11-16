import React, { useState } from 'react';
import { object } from 'prop-types';
import ProductsContext from './ProductsContext';

export default function UserProvider({ children }) {
  const [count, setCount] = useState(1);

  const context = {
    count,
    setCount,
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
