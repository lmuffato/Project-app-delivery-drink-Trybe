import React from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Nav, NavLink, NavBtnLink } from './HeaderElements';

export default function Header(props) {
  const { title, subtitle, name } = props;
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <Nav>
      <NavLink
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        <h1>{title}</h1>
      </NavLink>
      <NavLink
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <h1>{subtitle}</h1>
      </NavLink>
      <p>{name}</p>
      <NavBtnLink
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        <h1>Logout</h1>
      </NavBtnLink>
    </Nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
