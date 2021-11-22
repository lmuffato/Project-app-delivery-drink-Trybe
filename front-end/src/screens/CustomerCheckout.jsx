import React, { useContext } from 'react';
import DeliveryDetails from '../components/DeliveryDetails';
import ProductsCheckoutTable from '../components/ProductsCheckoutTable';
import ContextProducts from '../context/ContextProducts';
import NavBar from '../components/NavBar';

function CustomerCheckout() {
  const {
    cartProducts,
    calculateSubtotal,
    setCartProducts,
  } = useContext(ContextProducts);

  return (
    <>
      <NavBar />
      <ProductsCheckoutTable
        checkoutCart={ cartProducts }
        setCheckoutCart={ setCartProducts }
      />
      <p>
        R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { ` ${calculateSubtotal(cartProducts).toString().replace('.', ',')}` }
        </span>
      </p>
      <DeliveryDetails />
    </>
  );
}

export default CustomerCheckout;
