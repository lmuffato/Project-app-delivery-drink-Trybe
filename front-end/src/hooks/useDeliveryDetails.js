import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [sellers, setSellers] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');

  const fetchSellers = async () => {
    const arrayOfSellers = await api.getSellers();
    setSellers(arrayOfSellers);
  };

  React.useEffect(() => {
    fetchSellers();
  }, []);

  return (
    <DeliveryContext.Provider
      value={ { sellers, address, setAddress, number, setNumber } }
    >
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDeliveryDetails() {
  const context = useContext(DeliveryContext);
  return context;
}

DeliveryProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};
