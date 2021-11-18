import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Status from './status';

export default function CardSale({ sale }) {
  const testIdPart = window.location.href.includes('seller')
    ? 'seller_orders' : 'customer_products';
  const url = window.location.href.includes('seller')
    ? 'seller' : 'costumer';
  return (
    <Link to={ `localhost:3000/${url}/orders/${sale.id}` }>
      <div data-testid={ `${testIdPart}__element-order-date-${sale.id}` }>
        <div>
          <p>Pedido</p>
          <p>{ sale.id }</p>
        </div>
        <div>
          <Status status={ sale.status } />
        </div>
        <div>
          <p>{ sale.sale_date }</p>
          <h1>{ sale.total_price }</h1>
        </div>
      </div>
    </Link>
  );
}

CardSale.propTypes = {
  sale: PropTypes.objectOf({
    id: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
  }).isRequired,
};
