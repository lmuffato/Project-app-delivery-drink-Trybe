import React from 'react';
import propTypes from 'prop-types';
import testIDs from '../../datatestids.json';

export default function ProductCard({ id, status, date, price, address }) {
  const NUMBER_OF_DIGITS = 4;
  const leftPad = (number) => String(number).padStart(NUMBER_OF_DIGITS, '0');
  const formatTestID = (ID, idx) => testIDs[ID].replace('<id>', idx);
  const formatPrice = (value) => new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(value);
  return (
    <div className="card">
      <div data-testid={ formatTestID('48', id) }>
        {`Pedido ${leftPad(id)}`}
      </div>
      <div>
        <div>
          <div data-testid={ formatTestID('49', id) }>{status.toUpperCase()}</div>
          <div data-testid={ formatTestID('50', id) }>{date}</div>
          <div data-testid={ formatTestID('51', id) }>{formatPrice(price)}</div>
        </div>
        <div data-testid={ formatTestID('52', id) }>{address}</div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: propTypes.number.isRequired,
  status: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  address: propTypes.string.isRequired,
};
