import React from 'react';
import LinkProducts from './LinkProducts';
import LinkOrders from './LinkOrders';
import UserFullName from './UserFullName';
import LinkLogout from './LinkLogout';

function NavBar() {
  return (
    <div>
      <LinkProducts data-testid="customer_products__element-navbar-link-products" />
      <LinkOrders data-testid="customer_products__element-navbar-link-orders" />
      <UserFullName data-testid="customer_products__element-navbar-user-full-name" />
      <LinkLogout data-testid="customer_products__element-navbar-link-logout" />
    </div>
  );
}

export default NavBar;
