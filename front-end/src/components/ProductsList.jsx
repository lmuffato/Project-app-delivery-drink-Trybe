import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../contexts/Products';

const listProducts = (products) => products.map((product, index) => (
  <div data-testid={ products.id } key={ index }>
    <h1>{ product.name }</h1>
    <img src={ product.urlImage } alt={ product.name } />
    <h3>{ product.price }</h3>
    <button type="button">-</button>
    <p>0</p>
    <button type="button">+</button>
  </div>
));

function ProductList() {
  const { values, setValues } = useContext(ProductsContext);
  useEffect(() => {
    async function fetchData() {
      const token = JSON.parse(localStorage.getItem('token'));
      try {
        const { data: { data } } = await axios.get(
          'http://localhost:3001/products',
          { headers: {
            Authorization: `Bearer ${token}` } },
        );
        setValues({ ...values, data });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      { values.data ? listProducts(values.data) : <h1>Loading...</h1> }
      <p>teste</p>
    </>
  );
}

export default ProductList;
