import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/slices/productSlice';

function CustomerProducts() {
  const { isLoadingProducts, products } = useSelector(((state) => state.product));
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((res) => {
        dispatch(setProducts(res.data));
      });
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {
        isLoadingProducts ? 'Loading...'
          : products.map((product) => (
            <ProductCard product={ product } key={ product.id } />
          ))
      }
    </div>
  );
}

export default CustomerProducts;
