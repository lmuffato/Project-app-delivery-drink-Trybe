import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAlert from './useAlert';
import api from '../services/api';

export default function useAuth() {
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
    const message = request.response ? (
      JSON.parse(request.response).message
    ) : error.message;
    alertType('danger');
    alertMessage(message);
    showAlert(true);
  }

  function signInUser(userData) {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  function validateForm({ schema, values }) {
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
      if (authType === 'register') {
        await authenticate({ type: 'register', request: formValues });
      }
      const response = await authenticate({
        type: 'login',
        request: { email: formValues.email, password: formValues.password },
      });
      const { name, email, role, token } = response.data;
      signInUser({ name, email, role, token });
      if (callback) callback();
    } catch (error) {
      throwAuthFailedAlert(error);
    }
  }

  return {
    user,
    logOut,
    alertIsVisible,
    Alert,
    authFormSubmit,
    validateForm,
  };
}
