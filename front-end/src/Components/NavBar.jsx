import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/Navbar.css';

function Navbar() {
  const { userName } = useContext(NewOrderContext);
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
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
          className="customer_products__element-navbar-user-full-name"
        >
          <p>{ `${userName}` }</p>
        </span>
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

export default Navbar;
// nos ultimos requisitos eu voltarei para deixar o nome dinamico
