import React from 'react';
import { string } from 'prop-types';

function AddItem({ id }) {
  return (
    <div data-testid={ `customer_products__button-card-add-item-${id}` } />
  );
}
AddItem.propTypes = {
  id: string,
}.isRequired;

export default AddItem;
