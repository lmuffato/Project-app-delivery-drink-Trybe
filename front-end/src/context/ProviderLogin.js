import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ContextLogin from './ContextLogin';

function ProviderLogin({ children }) {
  const [token, setToken] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const urlBase = 'http://localhost:3001';

  const makeLogin = async (email, password) => {
    setInvalidEmailError(false);
    const { data: { token: newToken, error } } = await axios
      .post(`${urlBase}/login`, { email, password })
      .catch((er) => console.log(er));
    if (error) setInvalidEmailError(true);
    setToken(newToken);
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
