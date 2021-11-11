import React from 'react';
import { string } from 'prop-types';

function RmItem({ data }) {
  const { id } = data;
  return (
    <div data-testid={ `customer_products__button-card-rm-item-${id}` } />
  );
}
RmItem.propTypes = {
  id: string,
}.isRequired;

export default RmItem;
