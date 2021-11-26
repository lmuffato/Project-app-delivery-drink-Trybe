/// <reference path="../api/types.js" />
import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import jwdDecode from 'jwt-decode';
import * as storage from '../utils/localStorageManager';

const authContext = createContext();

const localStorageUser = JSON.parse(localStorage.getItem('user'));

const localUser = localStorageUser === null ? {}
  : { ...localStorageUser, ...jwdDecode(localStorageUser.token) };

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(localStorageUser !== null);
  const [user, setUser] = useState(localUser);
  const navigation = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const evaluatorTimeout = 1000;
    if ((pathname === '/login' || pathname === '/register') && authed) {
      console.log(user);
      setTimeout(() => {
        navigation(user.role);
      }, evaluatorTimeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
    storage.saveUser(loginData);
    setAuthed(true);
  }

  function logout() {
    setAuthed(false);
    setUser({});
    storage.deleteUser();
  }

  /**
   * @param {{status: number, message: string}} response
   */
  function logoutNotAuthorized(response) {
    const notAuthorized = 401;
    if (response.status === notAuthorized) {
      logout();
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
