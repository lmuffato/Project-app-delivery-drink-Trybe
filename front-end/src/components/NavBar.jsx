import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt as SignOutIcon } from 'react-icons/fa';

import styles from '../styles/components/NavBar.module.scss';

export default function NavBar() {
  return (
    <header className={ styles.nav }>
      <img src="./logo.svg" alt="tchau problema" />
      <nav>
        <Link to="/" data-testid="customer_products__element-navbar-link-products">
          Produtos
        </Link>
        <Link to="/" data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </Link>
      </nav>
      <div>
        <strong data-testid="customer_products__element-navbar-user-full-name">
          Nome da pessoa
        </strong>
        <button type="button" data-testid="customer_products__element-navbar-link-logout">
          <SignOutIcon />
          Sair
        </button>
      </div>
    </header>
  );
}