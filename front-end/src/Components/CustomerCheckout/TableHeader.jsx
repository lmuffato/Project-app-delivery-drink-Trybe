import React from 'react';

export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}
