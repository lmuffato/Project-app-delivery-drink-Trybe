import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './userContext';

function UserProvider({ children }) {
  const DEFAULT_USER = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    token: '',
  };

  const [user, setUser] = useState(DEFAULT_USER);
  const [cart, setCart] = useState([]);

  const context = {
    user,
    setUser,
    cart,
    setCart,
  };

  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
