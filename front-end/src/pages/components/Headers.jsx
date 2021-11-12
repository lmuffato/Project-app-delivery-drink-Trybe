import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import ProductsButton from './ProductsButton';
import OrdersButton from './OrdersButton';
import LogoutButton from './LogoutButton';
import ManageUsersButton from './ManageEmployeesButton';

export default function Headers({ history }) {
  const { user } = useContext(ContextDeliveryApp);

  if (user.role === 'customer') {
    return (
      <navbar>
        <ProductsButton history={ history } />
        <OrdersButton history={ history } />
        <p>{ user.name }</p>
        <LogoutButton history={ history } />
      </navbar>
    );
  }
  if (user.role === 'seller') {
    return (
      <navbar>
        <OrdersButton history={ history } />
        <p>{ user.name }</p>
        <LogoutButton history={ history } />
      </navbar>
    );
  }
  if (user.role === 'administrator') {
    return (
      <navbar>
        <ManageUsersButton history={ history } />
        <p>{ user.name }</p>
        <LogoutButton history={ history } />
      </navbar>
    );
  }
}

Headers.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};