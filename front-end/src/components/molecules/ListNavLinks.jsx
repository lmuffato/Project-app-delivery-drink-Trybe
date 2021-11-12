import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ListNavLinks = () => {
  const history = useHistory();

  const TogleActive = () => {
    const { location: { pathname } } = history;

    const productsLink = document.querySelector('.products-nav-link');
    const salesLink = document.querySelector('.sales-nav-link');
    const pathWithoutBar = pathname.substr(1);

    if (pathname === '/products') {
      productsLink.className = `nav-link ${pathWithoutBar}-nav-link active`;
      salesLink.className = `nav-link ${pathWithoutBar}-nav-link`;
    }

    if (pathname === '/sales') {
      salesLink.className = `nav-link ${pathWithoutBar}-nav-link active`;
      productsLink.className = `nav-link ${pathWithoutBar}-nav-link`;
    }
  };

  useEffect(() => {
    TogleActive();
  });

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link products-nav-link active"
            aria-current="page"
            to="/products"
          >
            PRODUTOS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link sales-nav-link"
            aria-current="page"
            to="/sales"
          >
            MEUS PEDIDOS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNavLinks;
