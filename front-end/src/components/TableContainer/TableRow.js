import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ id, description, quantity, unit, onClick, hasButton }) {
  const toReal = (value) => value.toFixed(2).replace('.', ',');
  return (
    <tr>
      <td className="row_id">{id}</td>
      <td className="row_description">{description}</td>
      <td className="row_quantity">{quantity}</td>
      <td className="row_unit_value">
        R$
        <span>{toReal(unit)}</span>
      </td>
      <td className="row_subtotal">
        R$
        <span>{toReal(quantity * unit)}</span>
      </td>
      {hasButton && (
        <td className="row_remove_bnt">
          <button onClick={ onClick } type="button">Remover</button>
        </td>)}
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  hasButton: PropTypes.bool,
};

TableRow.defaultProps = {
  onClick: () => {},
  hasButton: false,
};

export default TableRow;
