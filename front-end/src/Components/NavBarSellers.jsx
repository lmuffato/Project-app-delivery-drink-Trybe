import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NewOrderContext from '../context/NewOrderContext';
import '../Styles/NavBarSellers.css';

function NavbarSellers() {
  const { userName, navBarSair, setNavBarSair } = useContext(NewOrderContext);

  return (
    <div className="nav-container">
      <nav className="icons-container">
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className="orders"
        >
          PEDIDOS
        </Link>
        <div className="right-side">
          <div
            data-testid="customer_products__element-navbar-user-full-name"
            className="seller-name"
          >
            <p>{ `${userName}` }</p>
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
    </div>
  );
}

export default NavbarSellers;
