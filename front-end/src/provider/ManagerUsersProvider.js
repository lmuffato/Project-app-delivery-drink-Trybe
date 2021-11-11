import React, { useState } from 'react';
import { element } from 'prop-types';
import { ManagerUsersContext } from '../context';

function ManagerUsersProvider({ children }) {
  const [users, setUsers] = useState();
  const consumer = {
    users,
    setUsers,
  };

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
