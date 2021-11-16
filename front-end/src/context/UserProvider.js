import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState();

  return (
    <UserContext.Provider
      value={ {
        loggedUser,
        setLoggedUser,
      } }
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
