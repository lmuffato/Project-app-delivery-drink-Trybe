import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAlert from '../hooks/useAlert';
import api from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const {
    Alert,
    alertMessage,
    alertType,
    isVisible: alertIsVisible,
    showAlert,
  } = useAlert();
  const history = useHistory();

  function logOut() {
    history.push('/login');
    localStorage.removeItem('user');
    setUser({});
  }

  function throwAuthFailedAlert(error) {
    const { request } = error;
    const message = request.response ? request.response.message : error.message;
    alertType('danger');
    alertMessage(message);
    showAlert(true);
  }

  function signInUser(userData) {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  function validateForm({ schema, values }) {
    showAlert(false);
    const { error } = schema.validate(values);

    function throwErrorIfIsNotValid(customErrorMessage) {
      if (error !== undefined) {
        throw new Error(customErrorMessage || error.message);
      }
    }

    return {
      isValid: error === undefined,
      errorMessage: error ? error.message : '',
      throwErrorIfIsNotValid,
    };
  }

  function authenticate({ type, request }) {
    return api.post(`/${type}`, request);
  }

  async function authFormSubmit(event, { formSchema, formValues, authType }, callback) {
    event.preventDefault();
    try {
      validateForm({ schema: formSchema, values: formValues }).throwErrorIfIsNotValid();
      const response = await authenticate({ type: authType, request: formValues });
      const { name, email, role, token } = response.data;
      signInUser({ name, email, role, token });
      if (callback) callback();
    } catch (error) {
      throwAuthFailedAlert(error);
    }
  }

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
