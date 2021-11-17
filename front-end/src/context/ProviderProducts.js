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

  const setProductCartQuantity = async (id, quantity) => {
    if (quantity === 0) {
      setCartProducts(cartProducts.filter((product) => product.id !== id));
      return;
    }

    const productInCart = cartProducts.find((product) => product.id === id);

    if (productInCart) {
      setCartProducts(cartProducts
        .map((p) => {
          if (p.id === id) p.quantity = quantity;
          return p;
        }));
      return;
    }

    if (!id) return;

    const product = await findSpecificProduct(id);

    setCartProducts([...cartProducts, { ...product, quantity, id }]);
  };

  return (
    <ContextProducts.Provider
      value={ {
        findProducts,
        allProducts,
        cartProducts,
        setProductCartQuantity,
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
