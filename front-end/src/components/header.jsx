import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import Context from '../context/Context';

function Header() {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="container">
      <div
        className="border"
        data-testid="customer_products__element-navbar-link-products"
      >
        <a
          href="/#"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos

        </a>
      </div>
      <div className="border" data-testid="customer_products__element-navbar-link-orders">
        <a
          href="/#"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </a>
      </div>
      <div
        className="border"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }

        </h1>
      </div>

      <div className="border">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Header;
