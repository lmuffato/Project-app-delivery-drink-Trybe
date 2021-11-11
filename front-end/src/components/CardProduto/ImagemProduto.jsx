import React from 'react';
import { string } from 'prop-types';

function ImagemProduto({ data }) {
  const { id, name, urlImage } = data;
  return (
    <img
      alt={ name }
      data-testid={ `customer_products__button-card-add-item-${id}` }
      src={ urlImage }
      className="produto-card-image"
    />
  );
}
ImagemProduto.propTypes = {
  id: string,
  name: string,
  urlImage: string,
}.isRequired;

export default ImagemProduto;
