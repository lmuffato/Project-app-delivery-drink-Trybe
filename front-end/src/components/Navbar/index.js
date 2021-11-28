import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { NavbarContainer, NavbarWrapper, NavbarGroupLinks } from './styles';
import { useAuth } from '../../contexts/auth';

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
  administrator: {
    products: { show: false, text: null },
    orders: { show: true, text: 'GERENCIAR USUÁRIOS' },
  },
};

function Navbar({ userType, username }) {
  const { logout } = useAuth();
  const config = userConfig[userType];

  const ordersItem = () => (
    <NavItem to="orders" variant="primary" testid={ testids.orders }>
      {config.orders.text}
    </NavItem>
  );
  const productsItem = () => (
    <NavItem to="products" variant="primary" testid={ testids.products }>
      {config.products.text}
    </NavItem>
  );

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarGroupLinks>
          {config.products.show && productsItem()}
          {config.orders.show && ordersItem()}
        </NavbarGroupLinks>

        <NavbarGroupLinks>
          <NavItem to="/profile" variant="tertiary" testid={ testids.fullname }>
            {username}
          </NavItem>
          <NavItem
            to="/login"
            variant="quaternary"
            testid={ testids.logout }
            onClick={ () => { logout(); } }
          >
            Sair
          </NavItem>
        </NavbarGroupLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  userType: PropTypes.oneOf(['seller', 'customer', 'administrator']).isRequired,
  username: PropTypes.string.isRequired,
};

export default Navbar;
