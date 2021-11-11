import React from 'react';
import '../styles/header.css';
// import Context from '../context/Context';
// / { useContext }

function Header() {
  // const { } = useContext(Context);

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
        <h1 data-testid="customer_products__element-navbar-user-full-name">Nome</h1>
      </div>
      <div className="border">
        <h1 data-testid="customer_products__element-navbar-link-logout">Sair</h1>
      </div>
    </div>
  );
}

export default Header;
