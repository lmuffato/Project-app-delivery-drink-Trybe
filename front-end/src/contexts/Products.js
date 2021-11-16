import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = () => ({
  products: '',
});

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [values, setValues] = useState(initialState);

  return (
    <ProductsContext.Provider value={ { values, setValues } }>
      { children }
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
