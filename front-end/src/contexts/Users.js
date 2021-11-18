import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  return (
    <UsersContext.Provider
      value=""
    >
      { children }
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
