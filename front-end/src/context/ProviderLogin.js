import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextLogin from './ContextLogin';

const axios = require('axios').default;

function ProviderLogin({ children }) {
  const [token, setToken] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState(false);
  const urlBase = 'http://localhost:3001';

  const makeLogin = async (email, password) => {
    setInvalidEmailError(false);
    try {
      const { data } = await axios.post(`${urlBase}/login`, { email, password });
      setToken(data);
      return true;
    } catch (error) {
      setInvalidEmailError(true);
      return false;
    }
  };

  // ---------------------------------------------/---------------------------------------------------------------//

  const createUser = async (name, email, password) => {
    setSignUpErrorMessage(false);
    try {
      await axios.post(`${urlBase}/register`, { name, email, password });
      return true;
    } catch(error) {
      setSignUpErrorMessage(true);
      return false;
    }
  };

  // ---------------------------------------------/---------------------------------------------------------------//

  return (
    <ContextLogin.Provider
      value={ {
        createUser,
        makeLogin,
        token,
        signUpErrorMessage,
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
