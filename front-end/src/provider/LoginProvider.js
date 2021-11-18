import React, { useState } from 'react';
import { element } from 'prop-types';
import lib from '../context';

const { LoginContext } = lib;

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
