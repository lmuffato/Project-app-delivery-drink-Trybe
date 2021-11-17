import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import ContextProducts from '../context/ContextProducts';

function CustomerProducts() {
  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 5,
    marginLeft: 5,
  };

  const { findProducts, allProducts: products } = useContext(ContextProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      await findProducts();
      setLoading(false);
    }
    getProducts();
  }, []);

  const renderProductCard = () => products.map((product, index) => (
    <ProductCard key={ index } { ...product } />
  ));

  return (
    <div>
      <NavBar />

      { loading
        ? <p>Loading</p>
        : <Grid sx={ gridStyle }>{ renderProductCard() }</Grid> }
    </div>
  );
}

export default CustomerProducts;
