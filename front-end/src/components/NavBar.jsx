import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
      <li><NavLink to="/products">Produtos</NavLink></li>
      <li><NavLink to="/orders">Meus Pedidos</NavLink></li>
      <li>Username</li>
      <li><NavLink to="/logout">Sair</NavLink></li>
    </ul>
  );
}

export default NavBar;
