import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={ { backgroundColor: 'yellow' } }>
      <Link to="/customer/products">PRODUTOS</Link>
      <Link to="/customer/orders">MEUS PEDIDOS</Link>
      <span>NOME USER</span>
      <span>Sair</span>
    </nav>
  );
}

export default NavBar;
