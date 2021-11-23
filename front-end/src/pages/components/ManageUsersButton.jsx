import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ManageUsersButton() {
  const history = useHistory();
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
