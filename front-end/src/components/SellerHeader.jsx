import React from 'react';
import { Link } from 'react-router-dom';

function SellerHeader() {
  return (
    <header>
      <Link to="/customer/products">
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          {JSON.parse(localStorage.getItem('user')).role === 'seller' ? 'PEDIDOS'
            : 'GERENCIAR USUÁRIOS'}
        </button>
      </Link>
      <Link to="/perfil">
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          {JSON.parse(localStorage.getItem('user')).name}
        </button>
      </Link>
      <Link to="/login">
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => localStorage.removeItem('user') }
        >
          SAIR
        </button>
      </Link>
    </header>
  );
}

export default SellerHeader;
