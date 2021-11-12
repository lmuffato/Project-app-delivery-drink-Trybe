import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <OrderContext.Provider
      value={
        {
          totalPrice,
          setTotalPrice,
          order,
          setOrder }
      }
    >
      { children }
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrderProvider;
