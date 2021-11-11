import React from 'react';
import { number, string } from 'prop-types';

function PrecoProduto({ data }) {
  const { id, price } = data;
  return (
    <p data-testid={ `customer_products__element-card-price-${id}` }>
      { price }
    </p>
  );
}

PrecoProduto.propTypes = {
  id: string,
  price: number,
}.isRequired;

export default PrecoProduto;
