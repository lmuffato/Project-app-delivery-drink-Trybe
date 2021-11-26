import React from 'react';
import PropTypes from 'prop-types';

const hasButton = {
  'customer-checkout': true,
  'customer-details': false,
  'seller-details': false,
};

function TableHeader({ type }) {
  const productHeader = (
    <thead>
      <tr>
        <td>Item</td>
        <td>Descrição</td>
        <td>Quantidade</td>
        <td>Valor Unitário</td>
        <td>Sub-Total</td>
        {hasButton[type] && <td>Remover Item</td>}
      </tr>
    </thead>
  );

  const adminHeader = (
    <thead>
      <tr>
        <td>Item</td>
        <td>Nome</td>
        <td>E-mail</td>
        <td>Tipo</td>
        <td>Excluir</td>
      </tr>
    </thead>
  );

  return type === 'admin' ? adminHeader : productHeader;
}

TableHeader.propTypes = {
  type: PropTypes.oneOf([
    'customer-checkout',
    'customer-details',
    'seller-details',
    'admin',
  ]).isRequired,
};

export default TableHeader;
