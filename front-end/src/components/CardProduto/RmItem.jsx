import React from 'react';
import { string } from 'prop-types';
import useProductManager from '../../hooks/useProductManager';

function RmItem({ data }) {
  const [setProduct] = useProductManager();
  const { id, price } = data;
  const dataProductRm = { id, price, quantity: 1, operation: 'rm' };

  return (
    <button
      data-testid={ `customer_products__button-card-rm-item-${id}` }
      type="button"
      onClick={ () => setProduct(dataProductRm) }
    >
      -
    </button>
  );
}
RmItem.propTypes = {
  id: string,
}.isRequired;

export default RmItem;
