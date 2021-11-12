import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';
import { ManagerUsersContext } from '../context';
import isNotEmptyObject from '../utils/isNotEmptyObject';
// import api from '../services/api';

function ManagerUsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const consumer = {
    users,
    setUsers,
    user,
    setUser,
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const usersData = await api.get('/user');
  //     setUsers(usersData);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (isNotEmptyObject(user)) {
      const { name, email, password, role } = user;

      const userData = { name, email, password, role };

      setUsers((prev) => [...prev, userData]);
    }
  }, [user]);

  return (
    <ManagerUsersContext.Provider value={ { ...consumer } }>
      { children }
    </ManagerUsersContext.Provider>
  );
}

ManagerUsersProvider.propTypes = {
  children: element.isRequired,
};

export default ManagerUsersProvider;
