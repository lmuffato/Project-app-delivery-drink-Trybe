import React from 'react';
import { string } from 'prop-types';

function NomeProduto({ data }) {
  const { id, name } = data;
  return (
    <p data-testid={ `customer_products__element-card-title-${id}` }>
      { name }
    </p>
  );
}
NomeProduto.propTypes = {
  id: string,
  nome: string,
}.isRequired;

export default NomeProduto;
