import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/Navbar.css';

function Navbar() {
  const { userName, navBarSair, setNavBarSair } = useContext(NewOrderContext);

  return (
    <nav className="nav-container">
      <div className="left-icons-container">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className="products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className="orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="rigth-icons-container">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="user-name"
        >
          <div>{ `${userName}` }</div>
        </div>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          className="logout"
          onClick={ () => {
            setNavBarSair(!navBarSair);
            localStorage.clear();
          } }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
