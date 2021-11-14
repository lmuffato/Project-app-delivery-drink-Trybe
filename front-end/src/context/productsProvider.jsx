import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const priceContext = React.createContext('');

export const PricesProvider = ({ children }) => {
  const [putItem, setPutItem] = useState([]);

  const allParameters = {
    putItem,
    setPutItem,
  };

  return (
    <priceContext.Provider value={ allParameters }>
      { children }
    </priceContext.Provider>
  );
};

PricesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePrice = () => React.useContext(priceContext);
