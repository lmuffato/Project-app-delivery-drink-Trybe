import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const orderDetailsContext = React.createContext('');

export const OrderDetailsProvider = ({ children }) => {
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState({});
  const [products, setProducts] = useState([]);

  const allParameters = {
    sale,
    setSale,
    seller,
    setSeller,
    products,
    setProducts,
  };

  return (
    <orderDetailsContext.Provider value={ allParameters }>
      { children }
    </orderDetailsContext.Provider>
  );
};

OrderDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOrderDetails = () => React.useContext(orderDetailsContext);
