import React from 'react';

import './styles.css';

function ProductTable() {
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remover Item</th>
      </tr>
      <tr data-testid="element-order-table-name-0">
        <td className="item">1</td>
        <td className="description">Cerveja Stella 250ml</td>
        <td className="quantity">3</td>
        <td className="unit-value">R$3,50</td>
        <td className="sub-total">R$10,50</td>
        <td className="remove">Remover</td>
      </tr>
      <tr data-testid="element-order-table-name-1">
        <td className="item">1</td>
        <td className="description">Cerveja Stella 250ml</td>
        <td className="quantity">3</td>
        <td className="unit-value">R$3,50</td>
        <td className="sub-total">R$10,50</td>
        <td className="remove">Remover</td>
      </tr>
    </table>
  );
}

export default ProductTable;
