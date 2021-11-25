import React from 'react';
import { Link } from 'react-router-dom';

export default function salesCard({ id, status,
  sale_date: saleDate, total_price: total }) {
  const newDate = new Date(saleDate).toLocaleDateString('pt-br');
  const newPrice = total.replace(/\./g, ',');
  return (
    <Link to={ `/customer/orders/${id} ` }>
      <div>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{ status }</p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>{ newDate }</p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>{ newPrice }</p>
      </div>
    </Link>
  );
}
