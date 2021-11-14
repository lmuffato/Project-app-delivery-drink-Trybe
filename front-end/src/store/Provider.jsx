import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from './ContextDeliveryApp';

export default function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const contextValue = { user, setUser, products, setProducts };

  return (
    <ContextDeliveryApp.Provider value={ contextValue }>
      { children }
    </ContextDeliveryApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
