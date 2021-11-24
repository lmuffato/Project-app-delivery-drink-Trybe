import React from 'react';
import CheckoutTable from '../components/CheckoutTable';

function Checkout() {
  const testIds = {
    productId: 'customer_checkout__element-order-table-item-number-',
    productName: 'customer_checkout__element-order-table-name-',
    productQuantity: 'customer_checkout__element-order-table-quantity-',
    productUnitPrice: 'customer_checkout__element-order-table-unit-price-',
    productSubTotal: 'customer_checkout__element-order-table-sub-total-',
  };

  return (
    <CheckoutTable testIds={ testIds } />
  );
}

export default Checkout;
