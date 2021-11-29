import React from 'react';
import { string } from 'prop-types';
import useProductManager from '../../hooks/useProductManager';

function AddItem({ data }) {
  const [setProduct] = useProductManager();
  const { id, price } = data;
  const dataProductAdd = { id, price, quantity: 1, operation: 'add' };

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
      onClick={ () => setProduct(dataProductAdd) }
    >
      +
    </button>
  );
}
AddItem.propTypes = {
  id: string,
}.isRequired;

export default AddItem;
