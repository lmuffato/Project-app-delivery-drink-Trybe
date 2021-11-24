import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = () => ({
  id: '',
  name: '',
  role: '',
  email: '',
  password: '',
  buttonStatus: true,
  errorMessage: null,
});

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [values, setValues] = useState(initialState);

  return (
    <LoginContext.Provider value={ { values, setValues } }>
      { children }
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
