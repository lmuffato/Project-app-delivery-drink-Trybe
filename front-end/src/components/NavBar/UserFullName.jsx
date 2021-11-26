import React, { useContext } from 'react';
import contexts from '../../context';

function UserFullName() {
  const { login: name } = useContext(contexts.LoginContext);
  return (
    <div data-testid="customer_products__element-navbar-user-full-name">
      <h1>{ name }</h1>
    </div>
  );
}

export default UserFullName;
