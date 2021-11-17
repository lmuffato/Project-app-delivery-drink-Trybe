import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { NavbarContainer, NavbarWrapper, NavbarGroupLinks } from './styles';

const testids = {
  products: 'customer_products__element-navbar-link-products',
  orders: 'customer_products__element-navbar-link-orders',
  fullname: 'customer_products__element-navbar-user-full-name',
  logout: 'customer_products__element-navbar-link-logout',
};

const userConfig = {
  customer: {
    products: { show: true, text: 'PRODUTOS' },
    orders: { show: true, text: 'MEUS PEDIDOS' },
  },
  seller: {
    products: { show: false, text: null },
    orders: { show: true, text: 'PEDIDOS' },
  },
  admin: {
    products: { show: false, text: null },
    orders: { show: true, text: 'GERENCIAR USUÁRIOS' },
  },
};

function Navbar({ userType, username }) {
  const config = userConfig[userType];

  const ordersItem = () => (
    <NavItem variant="primary" testid={ testids.orders }>
      {config.orders.text}
    </NavItem>
  );
  const productsItem = () => (
    <NavItem variant="primary" testid={ testids.products }>
      {config.products.text}
    </NavItem>
  );

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarGroupLinks>
          {config.orders.show && ordersItem()}
          {config.products.show && productsItem()}
        </NavbarGroupLinks>

        <NavbarGroupLinks>
          <NavItem variant="tertiary" testid={ testids.fullname }>
            {username}
          </NavItem>
          <NavItem variant="quaternary" testid={ testids.logout }>Sair</NavItem>
        </NavbarGroupLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  userType: PropTypes.oneOf(['seller', 'customer', 'admin']).isRequired,
  username: PropTypes.string.isRequired,
};

export default Navbar;
