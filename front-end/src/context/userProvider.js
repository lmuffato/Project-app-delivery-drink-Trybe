import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './userContext';

function UserProvider({ children }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
  }, [userData]);

  return (
    <UserContext.Provider
      value={ {
        userData,
        setUserData,
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
