import React from 'react';
import ButtonTotal from '../components/ButtonTotal';
import DeliveryDetails from '../components/DeliveryDetails';
import NavBar from '../components/NavBar';
import CheckoutTable from '../components/CheckoutTable';

const testIds = {
  pageProductsId: 'customer_products__element-navbar-link-products',
  pageOrdersId: 'customer_products__element-navbar-link-orders',
  userId: 'customer_products__element-navbar-user-full-name',
};

const navegationNames = {
  pageName: 'Meus pedidos',
};

function Checkout() {
  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      <p>Checkout</p>
      <CheckoutTable testIds={ testIds } />
      <ButtonTotal
        buttonId="customer_checkout__element-order-total-price"
        isDisabled={ false }
      />
      <DeliveryDetails />
    </>
  );
}

export default Checkout;
