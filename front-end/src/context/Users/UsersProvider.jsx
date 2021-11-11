import React, { useState } from 'react';
import { object } from 'prop-types';
import UsersContext from './UsersContext';

export default function UserProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });

  const context = {
    login,
    setLogin,
  };
  return (
    <UsersContext.Provider value={ context }>
      {children}
    </UsersContext.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isRequired;
