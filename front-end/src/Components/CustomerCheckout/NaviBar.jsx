import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.css';

export default function NaviBar() {
  return (
    <div>
      <nav className="icons-container">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/checkout"
          data-testid="customer_products__element-navbar-link-orders"
          className="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-user-full-name"
          className="customer_products__element-navbar-user-full-name"
        >
          Nome do usuário
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          className="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </nav>
    </div>
  );
}
