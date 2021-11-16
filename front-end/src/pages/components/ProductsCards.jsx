import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchProducts from '../../services/fetchProducts';
import ProductCard from './ProductCard';
// import ComponenteTest from './ComponenteTest';

export default function ProductsCards({ callback }) {
  const { user, products, setProducts } = useContext(ContextDeliveryApp);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProducts = async () => {
    setIsLoading(true);
    const productsList = await fetchProducts(user.token);
    const productsWithQuantity = productsList.products.map((product) => {
      product.quantity = 0;
      return product;
    });
    setProducts(productsWithQuantity);
  };

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    setIsLoading(false);
  }, [products]);

  useEffect(() => {

  }, [products]);

  if (isLoading) {
    return (
      <h1>loading</h1>
    );
  }

  return (
    <div>
      { products.length && products
        .map((product, index) => (<ProductCard
          key={ product.id }
          product={ product }
          index={ index }
          callback={ callback }
        />))}
    </div>
  );
}

ProductsCards.propTypes = {
  callback: PropTypes.func.isRequired,
};
