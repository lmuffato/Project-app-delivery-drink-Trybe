import React from 'react';

function NavBar() {
  return (
    <nav className="navBar">
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </button>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Cicrano da Silva
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </button>
    </nav>
  );
}

export default NavBar;
