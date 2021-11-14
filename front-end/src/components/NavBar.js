import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={ { backgroundColor: 'yellow' } }>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        NOME USER
      </span>
      <span data-testid="customer_products__element-navbar-link-logout">Sair</span>
    </nav>
  );
}

export default NavBar;
