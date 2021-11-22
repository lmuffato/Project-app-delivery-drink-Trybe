import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const {
    user,
    logOut,
    alertIsVisible,
    Alert,
    authFormSubmit,
    validateForm,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={ {
        user,
        logOut,
        alertIsVisible,
        Alert,
        authFormSubmit,
        validateForm,
      } }
    >
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
