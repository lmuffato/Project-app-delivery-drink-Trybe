import React, { useContext } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import ProductsButton from './ProductsButton';
import OrdersButton from './OrdersButton';
import LogoutButton from './LogoutButton';
import ManageUsersButton from './ManageUsersButton';

export default function Headers() {
  const { user } = useContext(ContextDeliveryApp);

  if (user.role === 'customer') {
    return (
      <navbar>
        <ProductsButton />
        <OrdersButton />
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </p>
        <LogoutButton />
      </navbar>
    );
  }
  if (user.role === 'seller') {
    return (
      <navbar>
        <OrdersButton />
        <p>{ user.name }</p>
        <LogoutButton />
      </navbar>
    );
  }
  if (user.role === 'administrator') {
    return (
      <navbar>
        <ManageUsersButton />
        <p>{ user.name }</p>
        <LogoutButton />
      </navbar>
    );
  }
  return (
    <div>
      Deu ruim!
    </div>
  );
}
