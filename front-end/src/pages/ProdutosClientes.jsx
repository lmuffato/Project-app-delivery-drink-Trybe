import React from 'react';

import NavBar from '../components/NavBar/NavBar';
import CardProduto from '../components/CardProduto/CardProduto';
import '../styles/ProdutosClientes.css';

function ProdutosClientes() {
  return (
    <>
      <NavBar />
      <main className="main-cards">
        <CardProduto />
      </main>
    </>
  );
}

export default ProdutosClientes;
