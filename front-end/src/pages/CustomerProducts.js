import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/slices/productSlice';

function CustomerProducts() {
  const [products] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(['abacate', 'pera', 'uva']));
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      { products.map((product, index) => (
        <ProductCard product={ product } key={ index } />
      )) }
    </div>
  );
}

export default CustomerProducts;
