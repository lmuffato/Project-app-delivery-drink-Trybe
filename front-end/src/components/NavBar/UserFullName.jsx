import React, { useContext } from 'react';
import contexts from '../../context';

function UserFullName() {
  const { login: name } = useContext(contexts.LoginContext);
  return (
    <div>
      <h1>{ name }</h1>
    </div>
  );
}

export default UserFullName;
