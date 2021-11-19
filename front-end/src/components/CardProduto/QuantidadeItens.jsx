import React from 'react';
import { string } from 'prop-types';

function QuantidadeItens({ data }) {
  const { id } = data;
  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type="number"
      defaultValue={ 0 }
    />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
