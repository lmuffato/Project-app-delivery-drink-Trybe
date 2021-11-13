import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Headers from './components/Headers';
import ProductsCards from './components/ProductsCards';
import ShopCartCard from './components/ShopCartCard';

function CustomerProducts({ history }) {
  const [value, setValue] = useState([]);

  const handleCallback = (p) => {
    setValue(p
      .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0));
  };

  return (
    <div>
      <Headers history={ history } />
      <ProductsCards callback={ handleCallback } />
      <ShopCartCard value={ value } history= { history } />
    </div>
  );
}

export default CustomerProducts;

CustomerProducts.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
