import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SellerOrderCard({ id, status, totalPrice,
  saleDate, deliveryAddress, deliveryNumber }) {
  const history = useHistory();
  console.log(`id ==========> ${id}`);
  return (
    <button
      type="button"
      onClick={ () => history.push(`/seller/orders/${id}`) }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        {id}
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {status}
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        {saleDate}
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        {totalPrice}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {deliveryAddress}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {deliveryNumber}
      </div>
    </button>
  );
}

SellerOrderCard.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default SellerOrderCard;
