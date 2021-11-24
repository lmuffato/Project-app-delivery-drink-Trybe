import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableContainer from './styles';
import TableRow from './TableRow';

const datatestids = {
  'customer-checkout': {
    id: 'customer_checkout__element-order-table-item-number-',
    name: 'customer_checkout__element-order-table-name-',
    qty: 'customer_checkout__element-order-table-quantity-',
    price: 'customer_checkout__element-order-table-unit-price-',
    subtotal: 'customer_checkout__element-order-table-sub-total-',
    remove: 'customer_checkout__element-order-table-remove-',
  },
  'customer-details': {
    id: 'customer_order_details__element-order-table-item-number-',
    name: 'customer_order_details__element-order-table-name-',
    qty: 'customer_order_details__element-order-table-quantity-',
    price: 'customer_order_details__element-order-total-price-',
    subtotal: 'customer_order_details__element-order-table-sub-total-',
    remove: '',
  },
  'admin-management': {
    id: 'admin_manage__element-user-table-item-number-',
    name: 'admin_manage__element-user-table-name-',
    qty: 'admin_manage__element-user-table-email-',
    price: 'admin_manage__element-user-table-role-',
    subtotal: '',
    remove: 'admin_manage__element-user-table-remove-',
  },
};

function index({ hasButton }) {
  return (
    <TableContainer>
      <h2>Título</h2>
      <table>
        <TableHeader hasButton={ hasButton } />
        <tbody>
          <TableRow
            id={ 1 }
            description="oi"
            quantity={ 10 }
            unit={ 20.2 }
            onRemove={ () => { } }
            hasButton={ hasButton }
          />
          <TableRow
            id={ 1 }
            description="oi"
            quantity={ 10 }
            unit={ 20.2 }
            onRemove={ () => { } }
            hasButton={ hasButton }
          />
          <TableRow
            id={ 1 }
            description="oi"
            quantity={ 10 }
            unit={ 20.2 }
            onRemove={ () => { } }
            hasButton={ hasButton }
          />
        </tbody>
      </table>
    </TableContainer>
  );
}

TableContainer.propTypes = {
  hasButton: PropTypes.bool,
};

TableContainer.defaultProps = {
  hasButton: false,
};

export default index;
