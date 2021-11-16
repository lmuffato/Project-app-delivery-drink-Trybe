import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import ContextProducts from '../context/ContextProducts';

function CustomerProducts() {
  const { findProducts, allProducts: products } = useContext(ContextProducts);
  const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([{}]);

  useEffect(async () => {
    setLoading(true);
    async function getProducts() {
      await findProducts();
    }
    getProducts();
    setLoading(false);
  }, []);

  const renderProductCard = () => products.map((product, index) => (
    <ProductCard key={ index } { ...product } />
  ));

  return (
    <div>
      <NavBar />
      { loading
        ? <p>Loading</p>
        : renderProductCard() }
    </div>
  );
}

export default CustomerProducts;
