import React from 'react';
import { element } from 'prop-types';
import LoginContext from '../context/LoginContext';


function LoginProvider({ children }) {
  const consumer = {
    
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
