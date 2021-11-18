import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeliveryDetails from '../components/DeliveryDetails';
import ProductsCheckoutTable from '../components/ProductsCheckoutTable';
import ContextProducts from '../context/ContextProducts';

function CustomerCheckout() {
  const { cartProducts, calculateSubtotal } = useContext(ContextProducts);
  return (
    <div>
      <ProductsCheckoutTable checkoutCart={ cartProducts } />
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { `R$ ${calculateSubtotal(cartProducts).toString().replace('.', ',')}` }
      </p>
      <DeliveryDetails />
      <Button
        data-testid="customer_checkout__button-submit-order"
      >
        <Link
          to="/"
        >
          <Typography>
            Finalizar pedido
          </Typography>
        </Link>
      </Button>
    </div>
  );
}

export default CustomerCheckout;
