import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = () => ({
  name: '',
  email: '',
  password: '',
  messageErr: '',
  disabledButton: true,
});

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <RegisterContext.Provider value={ { data, setData } }>
      { children }
    </RegisterContext.Provider>
  );
};

RegisterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
