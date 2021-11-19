import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <UsersContext.Provider
      value={
        {
          users,
          setUsers }
      }
    >
      { children }
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;
