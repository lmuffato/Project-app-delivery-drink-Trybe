import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function NavBar({ dataUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoading(true);
  };

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
            onClick={ () => logout() }
            href="/"
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </a>
        </li>
      </ul>
      {
        isLoading && (
          <Redirect to="/" />
        )
      }
    </nav>
  );
}

NavBar.propTypes = {
  dataUser: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default NavBar;
