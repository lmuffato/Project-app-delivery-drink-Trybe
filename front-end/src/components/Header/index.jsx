import React, { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function Header() {
  const navigate = useNavigate();

  const conditionalNavigate = useCallback(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    conditionalNavigate();
  }, [conditionalNavigate]);

  const handleExitBtn = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const userStorage = localStorage.getItem('user');
  let user = null;
  if (userStorage) {
    user = JSON.parse(userStorage);
  }

  let titleNav = 'Produtos';
  let titleNavLink = '/customer/products';

  if (user.role === 'seller') {
    titleNav = 'Pedidos';
    titleNavLink = '/seller/orders';
  }
  if (user.role === 'administrator') {
    titleNav = 'Gerenciar Usuários';
    titleNavLink = '/admin/manage';
  }

  return (
    <nav className={ styles.topnav }>
      <div>
        <Link
          className={ styles.active }
          to={ titleNavLink }
          data-testid={
            user.role !== 'customer'
              ? 'customer_products__element-navbar-link-orders'
              : 'customer_products__element-navbar-link-products'
          }
        >
          { titleNav }
        </Link>
        {user.role !== 'customer' ? null : (
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </Link>)}
      </div>
      <div className={ styles.rightHeader }>
        <p data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleExitBtn }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
