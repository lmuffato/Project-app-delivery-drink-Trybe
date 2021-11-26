import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ListNavLinks = () => {
  const history = useHistory();

  const ToggleActive = () => {
    const { location: { pathname } } = history;

    const productsLink = document.querySelector('.products-nav-link');
    const salesLink = document.querySelector('.sales-nav-link');

    if (pathname === '/products') {
      productsLink.classList.add('active');
      salesLink.classList.remove('active');
    }

    if (pathname === '/sales') {
      salesLink.classList.add('active');
      productsLink.classList.remove('active');
    }
  };

  useEffect(() => {
    ToggleActive();
  });

  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav">
        <li
          className="nav-item"
          data-testid="customer_products__element-navbar-link-products"
        >
          <Link
            className="nav-link products-nav-link active"
            aria-current="page"
            to="/products"
          >
            PRODUTOS
          </Link>
        </li>
        <li
          className="nav-item"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <Link
            className="nav-link sales-nav-link"
            aria-current="page"
            to="/customer/orders"
          >
            MEUS PEDIDOS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNavLinks;
