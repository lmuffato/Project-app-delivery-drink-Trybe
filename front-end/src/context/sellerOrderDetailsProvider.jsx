import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const sellerOrderDetailsContext = React.createContext('');

export const SellerOrderDetailsProvider = ({ children }) => {
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
    <sellerOrderDetailsContext.Provider value={ allParameters }>
      { children }
    </sellerOrderDetailsContext.Provider>
  );
};

SellerOrderDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSellerOrderDetails = () => React.useContext(sellerOrderDetailsContext);
