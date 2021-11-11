import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from './ContextDeliveryApp';

export default function Provider({ children }) {
  const [token, setToken] = useState('');

  const contextValue = { token, setToken };

  return (
    <ContextDeliveryApp.Provider value={ contextValue }>
      { children }
    </ContextDeliveryApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
