import React from 'react';

function NavBar() {
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
            Fulano de Tal
          </a>
        </li>
        <li>
          <a
            href="/"
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
