import React from 'react';
import PropTypes from 'prop-types';

const datatestids = {
  'customer-checkout': {
    index: 'customer_checkout__element-order-table-item-number-',
    name: 'customer_checkout__element-order-table-name-',
    quantity: 'customer_checkout__element-order-table-quantity-',
    price: 'customer_checkout__element-order-table-unit-price-',
    subtotal: 'customer_checkout__element-order-table-sub-total-',
    remove: 'customer_checkout__element-order-table-remove-',
  },
  'customer-details': {
    index: 'customer_order_details__element-order-table-item-number-',
    name: 'customer_order_details__element-order-table-name-',
    quantity: 'customer_order_details__element-order-table-quantity-',
    price: 'customer_order_details__element-order-total-price-',
    subtotal: 'customer_order_details__element-order-table-sub-total-',
    remove: '',
  },
  'seller-details': {
    index: 'seller_order_details__element-order-table-item-number-',
    name: 'seller_order_details__element-order-table-name-',
    quantity: 'seller_order_details__element-order-table-quantity-',
    price: 'seller_order_details__element-order-table-unit-price-',
    subtotal: 'seller_order_details__element-order-table-sub-total-',
    remove: '',
  },
};

const hasButton = {
  'customer-checkout': true,
  'customer-details': false,
  'seller-details': false,
};

const productInfo = (product, onClick, type) => {
  const { index, name, quantity, price } = product;
  const toReal = (value) => value.toFixed(2).replace('.', ',');
  const tid = datatestids[type];

  return (
    <tr>
      <td className="row_index secondary" data-testid={ `${tid.index}${index}` }>
        {index + 1}
      </td>
      <td className="row_description" data-testid={ `${tid.name}${index}` }>
        {name}
      </td>
      <td className="row_quantity primary" data-testid={ `${tid.quantity}${index}` }>
        {quantity}
      </td>
      <td className="row_unit_value tertiary">
        R$
        <span data-testid={ `${tid.price}${index}` }>{toReal(price)}</span>
      </td>
      <td className="row_subtotal quaternary">
        R$
        <span
          data-testid={ `${tid.subtotal}${index}` }
        >
          {toReal(quantity * price)}
        </span>
      </td>
      {hasButton[type] && (
        <td className="row_remove_bnt">
          <button
            onClick={ () => { onClick(product); } }
            type="button"
            data-testid={ `${tid.remove}${index}` }
            className="secondary-2"
          >
            Remover
          </button>
        </td>)}
    </tr>
  );
};

const adminManagement = {
  index: 'admin_manage__element-user-table-item-number-',
  name: 'admin_manage__element-user-table-name-',
  email: 'admin_manage__element-user-table-email-',
  role: 'admin_manage__element-user-table-role-',
  remove: 'admin_manage__element-user-table-remove-',
};

const users = (data, onClick) => {
  const { name, email, role, index } = data;

  return (
    <tr>
      <td
        className="row_id secondary"
        data-testid={ `${adminManagement.index}${index}` }
      >
        {index + 1}
      </td>
      <td className="row_name" data-testid={ `${adminManagement.name}${index}` }>
        {name}
      </td>
      <td
        className="row_email primary"
        data-testid={ `${adminManagement.email}${index}` }
      >
        {email}
      </td>
      <td className="row_role tertiary" data-testid={ `${adminManagement.role}${index}` }>
        {role}
      </td>
      <td className="row_remove_bnt">
        <button
          onClick={ () => onClick(data) }
          type="button"
          className="quaternary"
          data-testid={ `${adminManagement.remove}${index}` }
        >
          Remover
        </button>
      </td>
    </tr>
  );
};

function TableRow({ data, onClick, type }) {
  return (
    type === 'admin' ? users(data, onClick) : productInfo(data, onClick, type)
  );
}

const productPropTypes = PropTypes.shape({
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
});

const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.oneOf(['customer', 'seller', 'administrator']),
});

const rowTypes = [
  'customer-checkout',
  'customer-details',
  'seller-details',
  'admin',
];
TableRow.propTypes = {
  data: PropTypes.oneOfType([productPropTypes, userPropTypes]).isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(rowTypes).isRequired,
};

export default TableRow;
