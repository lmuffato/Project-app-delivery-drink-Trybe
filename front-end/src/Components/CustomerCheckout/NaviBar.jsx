import React from 'react';

export default function NaviBar() {
  return (
    <div>
      <nav>
        <a
          href="www.google.com"
          data-testid="customer_products__element-navbar-link-products"
          className="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </a>
        <a
          href="www.google.com"
          data-testid="customer_products__element-navbar-link-orders"
          className="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </a>
        <a
          href="www.google.com"
          data-testid="customer_products__element-navbar-user-full-name"
          className="customer_products__element-navbar-user-full-name"
        >
          Nome do usuário
        </a>
        <a
          href="www.google.com"
          data-testid="customer_products__element-navbar-link-logout"
          className="customer_products__element-navbar-link-logout"
        >
          Sair
        </a>
      </nav>
    </div>
  );
}
