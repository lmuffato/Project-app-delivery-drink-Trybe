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
    localStorage.setItem('total', JSON.stringify(total));
  }, [total]);
  useEffect(() => {
    async function fetchData() {
      const token = JSON.parse(localStorage.getItem('token'));
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
        ? <form>{ listProducts(values.data) }</form> : <h1>Loading...</h1> }
      <button type="button" onClick={ () => navigate('/login') }>
        {`Ver Carrinho: ${total.toFixed(2)}`}
      </button>
    </>
  );
}

export default ProductList;
