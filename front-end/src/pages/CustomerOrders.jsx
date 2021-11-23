import React from 'react';
import PropTypes from 'prop-types';
import OrdersCards from './components/OrdersCards';
import Headers from './components/Headers';

export default function CustomerOrders({ history }) {
  return (
    <div>
      <Headers history={ history } />
      <OrdersCards />
    </div>
  );
}

CustomerOrders.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
