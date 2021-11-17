import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextProducts from './ContextProducts';

const axios = require('axios').default;

function ProviderProducts({ children }) {
  const [allProducts, setAllProducts] = useState([{}]);
  const [cartProducts, setCartProducts] = useState([{}]);
  const urlBase = 'http://localhost:3001';

  const findProducts = async () => {
    const { data: { products } } = await axios.get(`${urlBase}/products`);
    setAllProducts(products);
    return products;
  };

  const findSpecificProduct = async (id) => {
    const { data: product } = await axios.get(`${urlBase}/products/${id}`);
    return product;
  };

  const increaseProductQuantity = async (id) => {
    const productInCart = cartProducts.find((product) => product.id === id);

    if (productInCart) {
      productInCart.quantity += 1;
      return;
    }

    const product = await findSpecificProduct(id);

    setCartProducts([...cartProducts, { ...product, quantity: 1, id }]);
  };

  const setProductQuantity = async (id, quantity) => {
    const productInCart = cartProducts.find((product) => product.id === id);

    if (productInCart) {
      productInCart.quantity = quantity;
      return;
    }

    const product = await findSpecificProduct(id);

    setCartProducts([...cartProducts, { ...product, quantity, id }]);
  };

  const decreaseProductQuantity = (id) => {
    const productInCart = cartProducts.find((product) => product.id === id);

    if (!productInCart || productInCart.quantity === 0) return;

    productInCart.quantity -= 1;
  };

  return (
    <ContextProducts.Provider
      value={ {
        findProducts,
        allProducts,
        increaseProductQuantity,
        cartProducts,
        setProductQuantity,
        decreaseProductQuantity,
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
