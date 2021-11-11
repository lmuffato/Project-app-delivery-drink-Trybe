import React from 'react';

import './style.css';

function NavBar() {
  return (
    <nav className="topnav">
      <a
        className="active"
        data-testid="customer_products__element-navbar-link-products"
        href="#home"
      >
        Produtos
      </a>
      <a
        href="#news"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </a>
      <a
        href="#contact"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        User Name
      </a>
      <a
        href="#sair"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </a>
    </nav>
  );
}

export default NavBar;
