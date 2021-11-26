import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  const [token, setToken] = useState('');

  const application = 'application/json';

  const getUsersList = useCallback(async () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setToken(userInfo.token);
    axios.get('http://localhost:3001/admin', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: application,
        'Content-Type': application,
        Authorization: token,
      },
    })
      .then((result) => {
        const usersWithoutAdmin = result.data
          .filter((user) => user.role !== 'administrator');
        setUsersList(usersWithoutAdmin);
      });
  }, [token]);

  const removeUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: application,
          'Content-Type': application,
          Authorization: token,
        },
      });
      getUsersList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getUsersList();
    } catch (error) {
      console.log(error);
    }
  }, [getUsersList]);

  return (
    <UsersContext.Provider
      value={
        { usersList, setUsersList, token, setToken, removeUser }
      }
    >
      { children }
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
