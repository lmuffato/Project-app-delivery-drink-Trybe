import React, { useContext } from 'react';
import '../styles/header.css';
import Context from '../context/Context';

function Header() {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <div className="container">
      <div className="border">
        <h1 data-testid="customer_products__element-navbar-link-products">Produtos</h1>
      </div>
      <div className="border">
        <h1
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </h1>
      </div>
      <div className="border">
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }

        </h1>
      </div>
      <div className="border">
        <h1 data-testid="customer_products__element-navbar-link-logout">Sair</h1>
      </div>
    </div>
  );
}

export default Header;
