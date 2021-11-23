import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function OrdersButton() {
  const { user } = useContext(ContextDeliveryApp);

  const history = useHistory();

  const handleOrdersClick = () => {
    if (user.role === 'customer') {
      history.push('/customer/orders');
    }
    if (user.role === 'seller') {
      history.push('/seller/orders');
    }
  };

  return (
    <div>
      <label htmlFor="orders-btn">
        <input
          id="orders-btn"
          value="MEUS PEDIDOS"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ handleOrdersClick }
        />
      </label>
    </div>
  );
}
