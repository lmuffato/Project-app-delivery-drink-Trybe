import React from 'react';
import NavBar from '../components/NavBar';
import SellerOrderDetailsTable from '../components/SellerOrderDetailsTable';

function SellerOrderDetails() {
  const testIds = {
    pageOrdersId: 'customer_products__element-navbar-link-orders',
    userId: 'customer_products__element-navbar-user-full-name',
    orderId: 'seller_order_details__element-order-details-label-order-id',
    // sellerName: 'customer_order_details__element-order-details-label-seller-name',
    orderDate: 'seller_order_details__element-order-details-label-order-date',
    orderStatus: 'seller_order_details__element-order-details-label-delivery-status',
    buttonPreparing: 'seller_order_details__button-preparing-check',
    buttonDelivery: 'seller_order_details__button-dispatch-check',
    tableItemNumber: 'seller-order-table-item-number-',
    tableItemName: 'seller-order-table-name-',
    tableItemQuantity: 'seller_order_details__element-order-table-quantity-',
    tableItemSubTotal: 'seller_order_details__element-order-table-sub-total-',
    tableItemTotalPrice: 'seller_order_details__element-order-total-price-',
    tableTotalPrice: 'seller_order_details__element-order-total-price',
  };

  const navegationNames = {
    pageName: 'Meus Pedidos',
  };

  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      <SellerOrderDetailsTable testIds={ testIds } />
    </>
  );
}

export default SellerOrderDetails;
