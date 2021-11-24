import React from 'react';
import PropTypes from 'prop-types';
import Headers from './components/Headers';
import CustomerOrdersDetailsList from './components/CustomerDetailsList';

export default function CustomerOrdersDetails({ history }) {
  return (
    <div>
      <Headers history={ history } />
      <CustomerOrdersDetailsList />
    </div>
  );
}

CustomerOrdersDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
