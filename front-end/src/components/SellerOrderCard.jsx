import React from 'react';
import { shape, string } from 'prop-types';

function SellerOrderCard(props) {
  const { order } = props;
  const { number, status, date, value, address } = order;

  return (
    <div>
      <div>
        Pedido
        {' '}
        { number }
      </div>
      <div>
        { status }
      </div>
      <div>
        { date }
      </div>
      <div>
        R$
        {' '}
        { value }
      </div>
      <div>
        { address }
      </div>
    </div>
  );
}

SellerOrderCard.propTypes = {
  order: shape({
    number: string,
    status: string,
    date: string,
    value: string,
    address: string,
  }),
}.isRequired;

export default SellerOrderCard;
