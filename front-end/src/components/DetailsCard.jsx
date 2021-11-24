import React from 'react';
import PropTypes from 'prop-types';

function DetailsCard({ index, name, qtty, price, total, role }) {
  return (
    <tr>
      <td
        data-testid={ `${role}_order_details__element-order-table-item-number-${index}` }
      >
        { Number(index) + 1 }
      </td>
      <td
        data-testid={ `${role}_order_details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `${role}_order_details__element-order-table-quantity-${index}` }
      >
        { qtty }
      </td>
      <td>
        { `R$ ${Number(price).toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `${role}_order_details__element-order-table-sub-total-${index}` }
      >
        { `R$ ${Number(total).toFixed(2).replace('.', ',')}` }
      </td>
    </tr>
  );
}

DetailsCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  qtty: PropTypes.number,
  price: PropTypes.number,
  total: PropTypes.number,
}.isRequired;

export default DetailsCard;
