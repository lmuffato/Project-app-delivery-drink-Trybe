import React from 'react';
import { string } from 'prop-types';

function NomeProduto({ nome, id }) {
  return (
    <p data-testid={ `customer_products__element-card-title-${id}` }>
      { nome }
    </p>
  );
}
NomeProduto.propTypes = {
  id: string,
  nome: string,
}.isRequired;

export default NomeProduto;
