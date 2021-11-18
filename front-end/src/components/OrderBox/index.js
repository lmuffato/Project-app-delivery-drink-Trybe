import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function OrderBox({ props }) {
  const { id, status, sale_date: saleDate, total_price: totalPrice } = props;

  return (
    <div className="order-detail-container">

      <div className="order-info">
        <p>{`Pedido ${id}`}</p>
        <p>{saleDate.split('T')[0]}</p>
        <div>{status.toUpperCase()}</div>
      </div>

      <div>{totalPrice}</div>
    </div>
  );
}

OrderBox.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;

export default OrderBox;
