import React from 'react';
import { string } from 'prop-types';

function AddItem({ data }) {
  const { id } = data;

  const addProduct = ({ target }) => {
    
  };

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
      onClick={ addProduct }
    >
      +
    </button>
  );
}
AddItem.propTypes = {
  id: string,
}.isRequired;

export default AddItem;
