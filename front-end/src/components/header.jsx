import React from 'react';
import '../styles/header.css';
// import Context from '../context/Context';
// / { useContext }

function Header() {
  // const { } = useContext(Context);

  return (
    <div className="container">
      <div className="border">
        <h1>Produtos</h1>
      </div>
      <div className="border">
        <h1>Meus Pedidos</h1>
      </div>
      <div className="border">
        <h1>Nome</h1>
      </div>
      <div className="border">
        <h1>Sair</h1>
      </div>
    </div>
  );
}

export default Header;
