import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [UserData, setUserData] = useState();

  return (
    <UserContext.Provider
      value={ {
        UserData,
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
