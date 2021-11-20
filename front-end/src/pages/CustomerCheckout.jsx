import React from 'react';
import PropTypes from 'prop-types';
import Headers from './components/Headers';
import ProductsList from './components/ProductsList';
import OrderForm from './components/OrderForm';

export default function CustomerCheckout({ history }) {
  return (
    <div>
      <Headers history={ history } />
      <ProductsList history={ history } />
      <OrderForm />
    </div>
  );
}

CustomerCheckout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
