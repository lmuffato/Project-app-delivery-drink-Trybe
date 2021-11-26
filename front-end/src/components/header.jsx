import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/header.css';
import Context from '../context/Context';

function Header() {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (user.role === 'administrator') {
    return (
      <div className="container">
        <div
          className="border"
        >
          <Link
            to="/admin/manage"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Gerenciar Usuários
          </Link>
        </div>
        <div
          className="border"
          data-testid={ `${user.role}_products__element-navbar-user-full-name` }
        >
          <h1
            data-testid={ `${user.role}_products__element-navbar-user-full-name` }
          >
            { user.name }

          </h1>
        </div>
        <div className="border">
          <button
            type="button"
            data-testid={ `${user.role}_products__element-navbar-link-logout` }
            onClick={ logout }
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div
        className="border"
      >
        <Link
          to={ `/${user.role}/products` }
          data-testid={ `${user.role}_products__element-navbar-link-products` }
        >
          Produtos
        </Link>
      </div>
      <div
        className="border"
      >
        <Link
          to={ `/${user.role}/orders` }
          data-testid={ `${user.role}_products__element-navbar-link-orders` }
        >
          Meus Pedidos
        </Link>
      </div>
      <div
        className="border"
        data-testid={ `${user.role}_products__element-navbar-user-full-name` }
      >
        <h1
          data-testid={ `${user.role}_products__element-navbar-user-full-name` }
        >
          { user.name }

        </h1>
      </div>

      <div className="border">
        <button
          type="button"
          data-testid={ `${user.role}_products__element-navbar-link-logout` }
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Header;
