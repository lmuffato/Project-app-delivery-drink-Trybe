import React from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
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
      <div className="left-container">
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
      </div>
      <div className="right-container">
        <NavLink
          data-testid="customer_products__element-navbar-link-orders"
          to="#"
        >
          {name}
        </NavLink>
        <NavBtnLink
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          <AiOutlineLogout />
        </NavBtnLink>
      </div>
    </Nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
