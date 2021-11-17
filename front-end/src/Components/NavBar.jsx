import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="footer">
      <ul className="icons-container">
        <Link to="/customer/products">
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            <p>PRODUTOS</p>
          </li>
        </Link>
        <Link to="/customer/checkout">
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            <p>MEUS PEDIDOS</p>
          </li>
        </Link>
        <li><p>NAME</p></li>
        <Link to="/">
          <li><p>SAIR</p></li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
// nos ultimos requisitos eu voltarei para deixar o nome dinamico
