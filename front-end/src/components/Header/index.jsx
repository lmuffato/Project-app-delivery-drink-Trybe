import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className={ styles.topnav }>
      <div>
        <Link
          className={ styles.active }
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
      </div>
      <div className={ styles.rightHeader }>
        <p data-testid="customer_products__element-navbar-user-full-name">
          Flavio
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => navigate('/login') }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
