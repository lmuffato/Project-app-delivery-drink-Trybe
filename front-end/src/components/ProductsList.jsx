import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../contexts/Products';

const listProducts = (products) => {
  products.map((product, index) => (
    <div data-testid={ products.id } key={ index }>
      <h1>{ product.name }</h1>
      <img src={ product.url } alt={ product.name } />
      <h3>{ product.price }</h3>
      <button type="button">-</button>
      <p>0</p>
      <button type="button">+</button>
    </div>
  ));
};

function ProductList() {
  const { values, setValues } = useContext(ProductsContext);
  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products');
      setValues({ ...values, products });
    }

    try {
      fetchData();
    } catch ({ response }) {
      console.log(response.data.data);
    }
  }, [setValues, values]);

  return (
    <>
      { values.products ? listProducts(values.products) : <h1>Loading...</h1> }
      <p>teste</p>
    </>
  );
}

export default ProductList;
