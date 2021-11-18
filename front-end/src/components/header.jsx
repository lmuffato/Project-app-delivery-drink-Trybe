import React, { useContext } from 'react';
import '../styles/header.css';
import Context from '../context/Context';

function Header() {
  const { user } = useContext(Context);
  const { name, role } = user;
  console.log(user);

  return (
    <div className="container">
      { role === 'customer' && (
        <>
          <div className="border">
            <h1 data-testid="customer_products__element-navbar-link-products">
              Produtos
            </h1>
          </div>
          <div className="border">
            <h1
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </h1>
          </div>
        </>
      ) }
      { role === 'seller' && (
        <div className="border">
          <h1 data-testid="customer_products__element-navbar-link-orders">Pedidos</h1>
        </div>
      )}
      <div className="border">
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }

        </h1>
      </div>
      <div className="border">
        <h1 data-testid="customer_products__element-navbar-link-logout">Sair</h1>
      </div>
    </div>
  );
}

export default Header;
