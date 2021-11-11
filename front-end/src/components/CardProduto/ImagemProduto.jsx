import React from 'react';
import { string } from 'prop-types';

function ImagemProduto({ name, id, src }) {
  return (
    <img
      alt={ name }
      data-testid={ `customer_products__button-card-add-item-${id}` }
      src={ src }
      className="produto-card-image"
    />
  );
}
ImagemProduto.propTypes = {
  id: string,
  name: string,
  src: string,
}.isRequired;

export default ImagemProduto;
