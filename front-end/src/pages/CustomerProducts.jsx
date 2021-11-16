import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Headers from './components/Headers';
import ProductsCards from './components/ProductsCards';
import ShopCartCard from './components/ShopCartCard';
import CheckOutButton from './components/CheckOutButton';

function CustomerProducts({ history }) {
  const [value, setValue] = useState(0);

  const handleCallback = (p) => {
    setValue(p
      .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0));
  };

  // const getProducts = async (token) => {
  //   const productsList = await fetchProducts(token);
  //   return productsList;
  // };

  // useEffect(() => {
  //   const { token } = JSON.parse(localStorage.getItem('user'));
  //   const products = getProducts(token);
  //   if (products.message) {
  //     localStorage.removeItem('user');
  //     setUser({});
  //     setProducts([]);
  //     history.push('/login');
  //   }
  // }, [value]);

  return (
    <div>
      <Headers history={ history } />
      <ProductsCards callback={ handleCallback } />
      <ShopCartCard value={ value } history={ history } />
      <CheckOutButton value={ value } history={ history } />
    </div>
  );
}

export default CustomerProducts;

CustomerProducts.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
