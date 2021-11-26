import React from 'react';
import { Link } from 'react-router-dom';
import { getSaleById } from '../API/dataBaseCall';

export default function salesCard({ id, status,
  sale_date: saleDate, total_price: total, option }) {
  const newDate = new Date(saleDate).toLocaleDateString('pt-br');
  const newPrice = total.replace(/\./g, ',');
  const testId = option ? `customer_orders__element-order-id-${id}`
    : `seller_orders__element-order-id-${id}`;
  const statusId = option ? `customer_orders__element-delivery-status-${id}`
    : `seller_orders__element-delivery-status-${id}`;
  const dateID = option ? `customer_orders__element-order-date-${id}`
    : `seller_orders__element-order-date-${id}`;
  const priceId = option ? `customer_orders__element-card-price-${id}`
    : `seller_orders__element-card-price-${id}`;
  const path = option ? `/customer/orders/${id} ` : `/seller/orders/${id}`;

  async function requestDataBase() {
    const result = await getSaleById(id);
    console.log(result);
  }

  requestDataBase();

  return (
    <Link to={ path }>
      <div>
        <p data-testid={ testId }>{ id }</p>
        <p data-testid={ statusId }>{ status }</p>
        <p data-testid={ dateID }>{ newDate }</p>
        <p data-testid={ priceId }>{ newPrice }</p>
      </div>
    </Link>
  );
}
