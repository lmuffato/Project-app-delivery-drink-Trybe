import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonLogout from './ButtonLogout';

function NavBar({ ids: { productId, pageId, userId }, names: { pageName } }) {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const route = '/customer/products';
  return (
    <ul>
      {
        productId
        && <li data-testid={ productId }><NavLink to={ route }>Produtos</NavLink></li>
      }
      <li data-testid={ pageId }><NavLink to="/orders">{ pageName }</NavLink></li>
      <li data-testid={ userId }>{ name }</li>
      <li>
        <ButtonLogout />
      </li>
    </ul>
  );
}

export default NavBar;

NavBar.propTypes = {
  ids: PropTypes.object,
  names: PropTypes.object,
}.isRequired;
