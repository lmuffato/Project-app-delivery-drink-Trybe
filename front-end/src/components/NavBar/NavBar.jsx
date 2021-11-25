import React from 'react';
import { useLocation } from 'react-router';
import LinkProducts from './LinkProducts';
import LinkOrders from './LinkOrders';
import UserFullName from './UserFullName';
import LinkLogout from './LinkLogout';
import LinkManagerUsers from './LinkManagerUsers';

function NavBar() {
  const path = useLocation().pathname;
  console.log(path.includes('admin'));
  return (
    <div>
      { path.includes('customer')
        ? <LinkProducts data-testid="customer_products__element-navbar-link-products" />
        && <LinkOrders data-testid="customer_products__element-navbar-link-orders" />
        : null}

      { path.includes('seller')
        ? <LinkOrders data-testid="customer_products__element-navbar-link-orders" />
        : null}

      { path.includes('admin')
        ? <LinkManagerUsers />
        : null}

      <UserFullName data-testid="customer_products__element-navbar-user-full-name" />
      <LinkLogout data-testid="customer_products__element-navbar-link-logout" />
    </div>
  );
}

export default NavBar;
