import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/Navbar.css';
function NavbarSellers() {
  const { userName } = useContext(NewOrderContext);

  return (
    <div>
      <nav className="icons-container">
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className="pedidos"
        >
          PEDIDOS
        </Link>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
          className="seller-name"
        >
          <p>{ `${userName}` }</p>
        </span>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          className="logout"
        >
          SAIR
        </Link>
      </nav>
    </div>
  );
}

export default NavbarSellers;

