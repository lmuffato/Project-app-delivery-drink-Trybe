import React from 'react';

import NavBar from '../components/NavBar/NavBar';
import CardProduto from '../components/CardProduto/CardProduto';
import '../styles/ProdutosClientes.css';
import ButtonCart from '../components/ButtonCart/ButtonCart';

function ProdutosClientes() {
  return (
    <>
      <NavBar />
      <main className="main-cards">
        <CardProduto />
      </main>
      <ButtonCart />
    </>
  );
}

export default ProdutosClientes;
