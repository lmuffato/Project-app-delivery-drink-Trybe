import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { ProductsContext } from '../contexts/Products';
import ProductCard from './ProductCard';
import { CartContext } from '../contexts/Cart';

const listProducts = (products) => products.map((product, key) => (
  <ProductCard key={ key } productInfo={ product } />
));

function ProductList() {
  const { values, setValues } = useContext(ProductsContext);
  const { total } = useContext(CartContext);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const { token } = JSON.parse(localStorage.getItem('user'));

      try {
        const { data: { data } } = await axios.get(
          'http://localhost:3001/products',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setValues({ ...values, data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      { values.data
        ? <form>{ listProducts(values.data) }</form>
        : <h1>Loading...</h1> }
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        onClick={ () => navigate('/customer/checkout') }
      >
        { total.toFixed(2).toString().replace('.', ',') }
      </button>
    </>
  );
}

export default ProductList;
