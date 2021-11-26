import React from 'react';
import PropTypes from 'prop-types';

const logout = () => {
  localStorage.removeItem('user');
};

function NavBar({ dataUser }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </a>
        </li>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </a>
        </li>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { dataUser.name }
          </a>
        </li>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
          >
            SAIR
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  dataUser: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default NavBar;
