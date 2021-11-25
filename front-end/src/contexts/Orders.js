import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orderList, setOrderList] = useState('');

  return (
    <OrdersContext.Provider value={ { orderList, setOrderList } }>
      {children}
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
