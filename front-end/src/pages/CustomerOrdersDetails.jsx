import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getUsers, saleActionGetById } from '../utils/API/fetch';

export default function CustomerOrdersDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  console.log('🚀 ~ file: Customs ~ orderDetails', orderDetails);
  const [sellerName, setSellerName] = useState('');

  const dataTestId = {
    deliveryNumber: 'customer_order_details__element-order-details-label-order-id',
    sellerName: 'customer_order_details__element-order-details-label-seller-name',
    saleDate: 'customer_order_details__element-order-details-label-order-date',
    status: 'customer_order_details__element-order-details-label-delivery-status',
    entregue: 'customer_order_details__button-delivery-check',
  };
  // `customer_order_details__element-order-table-item-number-${id}`
  // `customer_order_details__element-order-table-name-${id}`
  // `customer_order_details__element-order-table-quantity-${id}`
  // `customer_order_details__element-order-table-sub-total-${id}`
  // `customer_order_details__element-order-total-price-${id}`

  const idOrder = 1;

  useEffect(() => {
    (async () => {
      const result = await saleActionGetById(idOrder);
      const users = await getUsers();
      setOrderDetails([result]);
      console.log('🚀 ~ file: CustomerOrdersDetails.jsx ~ line 23 ~ users', users);
      setSellerName(users.find(({ id }) => id === result.sellerId).name);
    })();
  }, []);

  return (
    <div style={ { margin: 20 } }>
      {orderDetails.map((order) => (
        <div key={ order.id }>
          <h3>Detalhe do Pedido</h3>
          <p
            data-testid={ dataTestId.deliveryNumber }
          >
            { order.id }
          </p>
          <p
            data-testid={ dataTestId.sellerName }
          >
            { sellerName }
          </p>
          <p
            data-testid={ dataTestId.saleDate }
          >
            { moment(order.saleDate).format('DD/MM/YYYY') }
          </p>
          <p
            data-testid={ dataTestId.status }
          >
            { order.status }
          </p>
          { order.products.map((product, index) => (
            <ul key={ index }>
              <li
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { index }
              </li>
              <li
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                { product.description }
              </li>
              <li
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                { product.quantity }
              </li>
              <li
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                { product.unitaryValue }
              </li>
              <li
                data-testid="customer_order_details__element-order-total-price"
              >
                { (product.subTotal)
                  .toString()
                  .replace('.', ',')}
              </li>

            </ul>
          ))}
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      ))}
    </div>
  );
}
