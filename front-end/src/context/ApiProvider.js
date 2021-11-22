import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUser, fetchProduct, fetchSale, fetchSaleProduct } from '../services/apis';
import ApiContext from './ApiContext';

function ApiProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [salesProducts, setSalesProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [att, setAtt] = useState(false);

  const getUsers = async () => {
    const apiResult = await fetchUser();
    setUsers(apiResult);
  };

  useEffect(() => {
    const sellerFiltered = users.filter((user) => user.role === 'seller');
    setSellers(sellerFiltered);
  }, [users]);

  const getSales = async () => {
    const apiResult = await fetchSale();
    setSales(apiResult);
  };

  const getProducts = async () => {
    const apiResult = await fetchProduct();
    setProducts(apiResult);
  };

  const getSalesProducts = async () => {
    const apiResult = await fetchSaleProduct();
    setSalesProducts(apiResult);
  };

  useEffect(() => {
    getUsers();
    getSales();
    getProducts();
    getSalesProducts();
  }, [att]);

  return (
    <ApiContext.Provider
      value={ {
        users,
        sales,
        products,
        salesProducts,
        att,
        setAtt,
        sellers,
      } }
    >
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
