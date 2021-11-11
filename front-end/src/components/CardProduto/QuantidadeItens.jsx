import React from 'react';
import { string } from 'prop-types';

function QuantidadeItens({ id }) {
  return (
    <div data-testid={ `customer_products__input-card-quantity-${id}` } />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
