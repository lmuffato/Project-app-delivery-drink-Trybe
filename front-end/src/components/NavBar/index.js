import React from 'react';

import './style.css';

function NavBar() {
  return (
    <div className="topnav">
      <a className="active" href="#home">Produtos</a>
      <a href="#news">Meus Pedidos</a>
      <a href="#contact">User Name</a>
      <a href="#sair">Sair</a>
    </div>
  );
}

export default NavBar;
