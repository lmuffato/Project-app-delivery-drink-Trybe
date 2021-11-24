import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ hasButton }) {
  return (
    <thead>
      <tr>
        <td>Item</td>
        <td>Descrição</td>
        <td>Quantidade</td>
        <td>Valor Unitário</td>
        <td>Sub-Total</td>
        {hasButton && <td>Remover Item</td>}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  hasButton: PropTypes.bool,
};

TableHeader.defaultProps = {
  hasButton: false,
};

export default TableHeader;
