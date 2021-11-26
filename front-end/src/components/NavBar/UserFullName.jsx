import React, { useContext } from 'react';
import contexts from '../../context';

function UserFullName() {
  const { login: name } = useContext(contexts.LoginContext);
  return (
    <div className="c_username">
      <h1 data-testid="customer_products__element-navbar-user-full-name">{ name }</h1>
    </div>
  );
}

export default UserFullName;
