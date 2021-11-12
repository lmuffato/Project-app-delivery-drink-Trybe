import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';
import genHashMd5 from 'md5';
import { ManagerUsersContext } from '../context';
import isNotEmptyObject from '../utils/isNotEmptyObject';

function ManagerUsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const consumer = {
    users,
    setUsers,
    user,
    setUser,
  };

  useEffect(() => {
    if (isNotEmptyObject(user)) {
      const { name, email, password, role } = user;
      const passwordHash = genHashMd5(password);

      setUsers((prev) => [...prev, { name, email, password: passwordHash, role }]);
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
