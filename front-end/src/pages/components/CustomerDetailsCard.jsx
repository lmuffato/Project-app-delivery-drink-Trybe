import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function CustomerDetailsCard({ sale }) {
  const { id, totalPrice, status, sale_date: saleDate } = sale;

  const date = moment(saleDate).format('DD/MM/YYYY');

  return (
    <div>
      <tr>
        <th data-testid="customer_order_details__element-order-details-label-order-id">
          {`Pedido ${id}`}
        </th>

        <th data-testid="customer_order_details__element-order-details-label-seller-name">
          {`P. Vend:${totalPrice}`}
        </th>
        <th data-testid="customer_order_details__element-order-details-label-order-date">
          {date}
        </th>
        <th
          data-testid="customer_order_details__element-order-
        details-label-delivery-status"
        >
          {status}
        </th>
        <th
          data-testid="customer_order_details__element-order-
        details-label-delivery-check"
        >
          {}
        </th>
      </tr>
      <tbody>
        <tr>
          <td
            data-testid={ `customer_order_details__element-
          order-table-item-number-${totalPrice}` }
          >
            {}
          </td>
          <td
            data-testid={ `customer_order_details__element-
          order-table-name-${id}` }
          >
            {}
          </td>
          <td
            data-testid={ `customer_order_details__element-
          order-table-quantity-${id}` }
          >
            {}
          </td>
          <td
            data-testid={ `customer_order_details__element-
          order-table-sub-total-${id}` }
          >
            {}
          </td>
          <td
            data-testid={ `customer_order_details__element-
          order$-total-price-${id}` }
          >
            {}
          </td>
        </tr>
      </tbody>
      <p>{`Total: R$${totalPrice}`}</p>
    </div>
  );
}

CustomerDetailsCard.propTypes = {
  sale: PropTypes.shape({
    status: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
