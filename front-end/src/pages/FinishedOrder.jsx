import React from 'react';
import { Link } from 'react-router-dom';

export default function FinishedOrder() {
  return (
    <div>
      <h1>Compra Realizada com Sucesso</h1>
      <Link to="/customer/orders">
        Voltar
      </Link>
    </div>
  );
}
