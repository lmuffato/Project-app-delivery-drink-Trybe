import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableContainer from './styles';
import TableRow from './TableRow';

function index({ type, items, onDelete }) {
  return (
    <TableContainer>
      <table>
        <TableHeader type={ type } />
        <tbody>
          {items.map((data) => (
            <TableRow
              key={ data.id }
              data={ data }
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

index.propTypes = {
  items: PropTypes.oneOfType([productItems, userItems]).isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'customer-checkout',
    'customer-details',
    'seller-details',
    'admin',
  ]).isRequired,
};

index.defaultProps = {
  items: [],
};

export default index;
