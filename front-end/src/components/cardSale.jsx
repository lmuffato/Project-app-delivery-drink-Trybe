import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Status from './status';

export default function CardSale({ sale }) {
  return (
    <Link to={ `localhost:3000/seller/orders/${sale.id}` }>
      <div data-testid={ `seller_orders__element-order-date-${sale.id}` }>
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
  sale: PropTypes.elementType({
    id: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
  }).isRequired,
};
