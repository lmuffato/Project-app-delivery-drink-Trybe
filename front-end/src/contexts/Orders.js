import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [orderList, setOrderList] = useState({});

  const application = 'application/json';

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')));
    console.log(token);
    const getOrderList = async () => {
      const response = await axios.get('http://localhost:3001/orders/customerId', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: application,
          'Content-Type': application,
          Authorization: token,
        },
      });
      setOrderList(response.data);
    };
    getOrderList();
  }, [token]);
  console.log({ orders: orderList });

  return (
    <OrdersContext.Provider value={ orderList }>
      {children}
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
