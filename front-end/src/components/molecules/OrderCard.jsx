import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate, formatPrice, formatTestID, leftPad } from '../../utils/functions';

export default function ProductCard({ id, status, date, price, address }) {
  return (
    <div className="card">
      <Link to={ `/seller/orders/${id}` }>
        <div data-testid={ formatTestID('48', id) }>
          {`Pedido ${leftPad(id)}`}
        </div>
        <div>
          <div>
            <div data-testid={ formatTestID('49', id) }>{status.toUpperCase()}</div>
            <div data-testid={ formatTestID('50', id) }>{formatDate(date)}</div>
            <div data-testid={ formatTestID('51', id) }>{formatPrice(price)}</div>
          </div>
          <div data-testid={ formatTestID('52', id) }>{address}</div>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  id: propTypes.number.isRequired,
  status: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
};
