import React from 'react';
import PropTypes from 'prop-types';

export default function ManageUsersButton({ history }) {
  const handleManageUsersClick = () => {
    history.push('/admin/manage');
  };
  return (
    <div>
      <label htmlFor="manage-users-btn">
        <input
          id="manage-users-btn"
          value="GERENCIAR USÚARIOS"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ handleManageUsersClick }
        />
      </label>
    </div>
  );
}

ManageUsersButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
