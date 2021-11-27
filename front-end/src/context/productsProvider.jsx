import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const priceContext = React.createContext('');

export const PricesProvider = ({ children }) => {
  const [putItem, setPutItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const prices = putItem
      .reduce((acc, item) => Number(item.price) * item.quantity + acc, 0);
    setTotalPrice(prices.toFixed(2));
  };

  const allParameters = {
    putItem,
    setPutItem,
    totalPrice,
    setTotalPrice,
    calculateTotalPrice,
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
