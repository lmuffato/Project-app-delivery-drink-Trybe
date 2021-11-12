import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function OrdersButton({ history }) {
  const { user } = useContext(ContextDeliveryApp);
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

OrdersButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
