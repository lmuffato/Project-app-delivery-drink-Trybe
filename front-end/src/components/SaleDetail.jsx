import React from 'react';
import PropTypes from 'prop-types';
import OrdersTable from './OrdersTable';

export default function SaleDetail({ sale }) {
  return (
    <div>
      <OrdersTable orderList={ sale.products } />
      <h1>{`Total: R$ ${sale.total_price}`}</h1>
    </div>
  );
}

SaleDetail.propTypes = {
  sale: PropTypes.objectOf().isRequired,
};
