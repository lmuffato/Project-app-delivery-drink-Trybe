import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../contexts/Products';

const listProducts = (products) => products.map((product, index) => (
  <div data-testid={ product.id } key={ index }>
    <h1>{ product.name }</h1>
    <img
      data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      src={ product.urlImage }
      alt={ product.name }
    />
    <h3 data-testid={ `customer_products__element-card-price-${product.id}` }>
      { product.price }
    </h3>
    <button
      data-testid={ `customer_products__button-card-add-item-${product.id}` }
      type="button"
    >
      +
    </button>
    <p data-testid={ `customer_products__input-card-quantity-${product.id}` }>0</p>
    <button
      data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      type="button"
    >
      -
    </button>
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
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
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
