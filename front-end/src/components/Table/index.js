import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableContainer from './styles';
import TableRow from './TableRow';

function Table({ type, items, onDelete }) {
  return (
    <TableContainer>
      <table>
        <TableHeader type={ type } />
        <tbody>
          {items.map((data, index) => (
            <TableRow
              key={ data.id }
              data={ { ...data, index } }
              type={ type }
              onClick={ onDelete }
            />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

const productItems = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  price: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
}));

const userItems = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.number,
  email: PropTypes.number,
  role: PropTypes.oneOf(['customer', 'seller', 'administrator']),
}));

Table.propTypes = {
  items: PropTypes.oneOfType([productItems, userItems]),
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'customer-checkout',
    'customer-details',
    'seller-details',
    'admin',
  ]).isRequired,
};

Table.defaultProps = {
  items: [],
};

export default Table;
