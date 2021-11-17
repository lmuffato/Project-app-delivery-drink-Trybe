import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductListContext from './ProductListContext';

function ProductListProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <ProductListContext.Provider
      value={ {
        productsList,
        setProductsList,
        totalPrice,
        setTotalPrice,
      } }
    >
      {children}
    </ProductListContext.Provider>
  );
}

ProductListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductListProvider;
