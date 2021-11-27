import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orderList, setOrderList] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const { data } = await axios.get('http://localhost:3001/orders/customerId', {
          headers: {
            Authorization: token,
          },
        });
        console.log(data);
        setOrderList(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <OrdersContext.Provider value={ { orderList, setOrderList } }>
      {children}
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
