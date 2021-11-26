import React from 'react';
import OrderDetailsTable from '../components/OrderDetailsTable';

function ProductDetails() {
  const testIds = {
    productId: 'customer_order_details__element-order-table-item-number-',
    productName: 'customer_order_details__element-order-table-name-',
    productQuantity: 'customer_order_details__element-order-table-quantity-',
    productUnitPrice: 'customer_order_details__element-order-table-sub-total-',
    productSubTotal: 'customer_order_details__element-order-total-price-',
  };

  return (
    <OrderDetailsTable testIds={ testIds } />
  );
}

export default ProductDetails;
