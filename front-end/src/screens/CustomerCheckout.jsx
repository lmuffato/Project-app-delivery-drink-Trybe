import React from 'react';
import DeliveryDetails from '../components/DeliveryDetails';
import ProductsCheckoutTable from '../components/ProductsCheckoutTable';

function CustomerCheckout() {
  const total = 100.87;
  return (
    <div>
      <ProductsCheckoutTable />
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${total}` }
      </p>
      <DeliveryDetails />
    </div>
  );
}

export default CustomerCheckout;
