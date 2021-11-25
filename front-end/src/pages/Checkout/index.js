import React from 'react';
import CheckoutTable from '../../components/CheckoutTable';
import MenuCostumer from '../../components/MenuCustomer';
import { useCart } from '../../hooks/useCart';
import './style.css';

function CheckoutPage() {
  const [cart] = React.useState(JSON.parse(localStorage.getItem('carrinho')));

  const { totalValue } = useCart();

  return (
    <section className="checkoutPage">
      <MenuCostumer />
      <CheckoutTable cart={ cart } />
      <div>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {totalValue}
        </span>
      </div>
    </section>
  );
}

export default CheckoutPage;
