import React from 'react';
import PropTypes from 'prop-types';

function Table({ headers, payload, hasButton, onClick, testeId }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          {headers.map((header, i) => (
            <th key={ `head${i}` }>{header}</th>
          ))}
          { hasButton && <th>Excluir</th> }
        </tr>
      </thead>
      <tbody>
        { payload.map((item, i) => (
          <tr key={ `${testeId}${i}` }>
            <td>{ i + 1 }</td>
            { Object.values(item).map((value) => (
              <td key={ `${value}` }>{ value }</td>
            ))}
            { hasButton && (
              <td>
                <button type="button" onClick={ () => onClick(item.name) }>
                  Remover
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  hasButton: false,
  onClick: () => null,
  testeId: 'row',
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  payload: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasButton: PropTypes.bool,
  onClick: PropTypes.func,
  testeId: PropTypes.string,
};

export default Table;
