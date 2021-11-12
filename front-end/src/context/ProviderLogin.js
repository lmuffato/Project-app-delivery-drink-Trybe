import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextLogin from './ContextLogin';

const axios = require('axios').default;

function ProviderLogin({ children }) {
  const [token, setToken] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const urlBase = 'http://localhost:3001';

  const makeLogin = async (email, password) => {
    setInvalidEmailError(false);
    try {
      const { data } = await axios.post(`${urlBase}/login`, { email, password });
      setToken(data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      console.log(errorObject);
      setInvalidEmailError(true);
    }
  };

  const createUser = async (name, email, password) => {
    await axios.post(`${urlBase}/users/register`, {
      name, email, password,
    });
  };

  return (
    <ContextLogin.Provider
      value={ {
        createUser,
        makeLogin,
        token,
        invalidEmailError,
      } }
    >
      {children}
    </ContextLogin.Provider>
  );
}

ProviderLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderLogin;
