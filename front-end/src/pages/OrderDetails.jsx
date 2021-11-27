import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetailsTable from '../components/OrderDetailsTable';

function ProductDetails() {
  const testIds = {
    pageProductsId: 'customer_products__element-navbar-link-products',
    pageOrdersId: 'customer_products__element-navbar-link-orders',
    userId: 'customer_products__element-navbar-user-full-name',
    orderId: 'customer_order_details__element-order-details-label-order-id',
    sellerName: 'customer_order_details__element-order-details-label-seller-name',
    orderDate: 'customer_order_details__element-order-details-label-order-date',
    orderStatus: 'customer_order_details__element-order-details-label-delivery-status',
    buttonDelivery: 'customer_order_details__button-delivery-check',
    tableItemNumber: 'customer_order_details__element-order-table-item-number-',
    tableItemName: 'customer_order_details__element-order-table-name-',
    tableItemQuantity: 'customer_order_details__element-order-table-quantity-',
    tableItemSubTotal: 'customer_order_details__element-order-table-sub-total-',
    tableItemTotalPrice: 'customer_order_details__element-order-total-price-',
    tableTotalPrice: 'customer_order_details__element-order-total-price',
  };

  const navegationNames = {
    pageName: 'Meus Pedidos',
  };

  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      <OrderDetailsTable testIds={ testIds } />
    </>
  );
}

export default ProductDetails;
