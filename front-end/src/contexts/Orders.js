import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orderList, setOrderList] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { token, id } = JSON.parse(localStorage.getItem('user'));
        const data = await axios.get(`http://localhost:3001/orders/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(data);
        setOrderList(response);
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
