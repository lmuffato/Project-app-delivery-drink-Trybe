import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt as SignOutIcon } from 'react-icons/fa';

import styles from '../styles/components/NavBar.module.scss';
import { AuthContext } from '../contexts/auth';

export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <header className={ styles.nav }>
      <img src="/logo.svg" alt="tchau problema" />
      <nav>
        { user.role !== 'seller' && (
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
        )}
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </Link>
      </nav>
      <div>
        <strong data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </strong>
        <button
          onClick={ logOut }
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          <SignOutIcon />
          Sair
        </button>
      </div>
    </header>
  );
}
