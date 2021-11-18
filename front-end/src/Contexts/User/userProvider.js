/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from './userContext';
import { validateToken } from '../../utils/Data';

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
  const history = useHistory();

  const context = {
    user,
    setUser,
    cart,
    setCart,
  };

  useEffect(() => {
    const validate = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await validateToken(token);
        if (data) {
          setUser(data);
        } else {
          history.push('/login');
        }
      }
    };
    validate();
  }, []);

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
