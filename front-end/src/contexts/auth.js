/// <reference path="../api/types.js" />
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState({});

  const context = {
    authed,
    setAuthed,
    user,
    setUser,
  };

  return (
    <authContext.Provider value={ context }>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuth = () => {
  const { authed, setAuthed, user, setUser } = useContext(authContext);
  const navigation = useNavigate();

  /**
   * @param {OkLogin} loginData
   */
  function login(loginData) {
    setUser(loginData);
    setAuthed(true);
  }

  function logout() {
    setAuthed(false);
  }

  /**
   * @param {import('axios').AxiosResponse<ErrorLogin>} response
   */
  function logoutNotAuthorized(response) {
    const notAuthorized = 401;
    if (response.status === notAuthorized) {
      logout();
      token(null);
      navigation('/login');
    }
  }

  /**
   * @param {OkLogin} userInfo
   */
  function redirectUserByRole(userInfo) {
    if (userInfo.role === 'administrator') return navigation('/customer');
    if (userInfo.role === 'customer') return navigation('/customer');
    if (userInfo.role === 'seller') return navigation('/customer');
  }

  return {
    authed,
    login,
    logout,
    user,
    logoutNotAuthorized,
    redirectUserByRole,
  };
};

export default AuthProvider;
