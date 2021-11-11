import React from 'react';
import { number } from 'prop-types';

function PrecoProduto({ preco, id }) {
  return (
    <p data-testid={ `customer_products__element-card-price-${id}` }>
      { preco }
    </p>
  );
}

PrecoProduto.propTypes = {
  preco: number,
}.isRequired;

export default PrecoProduto;
