import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonLogout from './ButtonLogout';
import { LoginContext } from '../contexts/Login';

function NavBar() {
  const { values } = useContext(LoginContext);

  return (
    <ul>
      <li data-testid="customer_products__element-navbar-link-products">
        <NavLink to="/products">
          Produtos
        </NavLink>
      </li>
      <li data-testid="customer_products__element-navbar-link-orders">
        <NavLink to="/orders">
          Meus Pedidos
        </NavLink>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        { values.name || 'username' }
      </li>
      <li data-testid="customer_products__element-navbar-link-logout">
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
