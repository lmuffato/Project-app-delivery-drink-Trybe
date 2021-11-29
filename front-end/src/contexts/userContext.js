import React, {
  createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (!user) {
  //     const storageUser = JSON.parse(localStorage.getItem('user'));

  //     if (storageUser) {
  //       setUser(storageUser);
  //     }
  //   }
  // }, [user]);

  return (
    <UserContext.Provider value={ { user, setUser } }>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
