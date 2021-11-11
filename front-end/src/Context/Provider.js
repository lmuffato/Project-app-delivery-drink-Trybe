import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export const Provider = ({ children }) => (
  <Context.Provider>
    { children }
  </Context.Provider>
);

const useGlobalContext = () => useContext(Context);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useGlobalContext;
