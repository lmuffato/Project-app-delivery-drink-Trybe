import React, { useState } from 'react';
import { element } from 'prop-types';
import { LoginContext } from '../context';

function LoginProvider({ children }) {
  const [login, setLogin] = useState();
  const consumer = {
    login,
    setLogin,
  };

  return (
    <LoginContext.Provider value={ { ...consumer } }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: element.isRequired,
};

export default LoginProvider;
