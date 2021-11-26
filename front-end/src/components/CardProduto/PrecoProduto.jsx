import React from 'react';
import { number, string } from 'prop-types';

function PrecoProduto({ data }) {
  const { id, price } = data;
  const priceProduct = Number(price).toFixed(2).replace('.', ',');
  return (
    <p data-testid={ `customer_products__element-card-price-${id}` }>
      { priceProduct }
    </p>
  );
}

PrecoProduto.propTypes = {
  id: string,
  price: number,
}.isRequired;

export default PrecoProduto;
