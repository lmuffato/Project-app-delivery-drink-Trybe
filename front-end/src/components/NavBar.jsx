import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ ids: { productId, pageId, userId }, names: { pageName, userName } }) {
  return (
    <ul>
      { productId
        && <li data-testid={ productId }><NavLink to="/products">Produtos</NavLink></li> }
      <li data-testid={ pageId }><NavLink to="/orders">{ pageName }</NavLink></li>
      <li data-testid={ userId }>{ userName }</li>
      <li
        data-testid="customer_products__element-navbar-link-logout"
      >
        <NavLink to="/logout">Sair</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;

NavBar.propTypes = {
  ids: PropTypes.object,
  names: PropTypes.object,
}.isRequired;
