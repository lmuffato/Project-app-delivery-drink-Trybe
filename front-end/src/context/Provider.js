import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';// https://github.com/tryber/sd-10a-live-lectures/pull/89/files
import Context from './Context';
// import { io } from 'socket.io-client';// https://github.com/tryber/sd-10a-live-lectures/pull/89/files

const socket = io('http://localhost:3001');

const Endpoints = {
  login_form: 'login',
  registration_form: 'register',
  checkout_form: 'sale',
  seller_orders: 'seller/orders',
  customer_checkout: 'sale',
  input_sellers: 'customer/checkout',
  seler_login: 'seller/orders',
};

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState({});
  const [sellers, setSellers] = useState([]);
  // const [sellerPerson, setSellerPerson] = useState('');

  /// ////////////////////////Link with BackEnd//////////////////////// ///

  const postSubmit = (url) => axios.post(`http://localhost:3001/${url}`, user);

  const post = (formType, data, id) => {
    const token = localStorage.getItem('token');
    return axios.post(`http://localhost:3001/${Endpoints[formType]}/${id || ''}`,
      data,
      {
        headers: {
          Authorization: token || null,
        },
      });
  };

  const get = (formType, id) => {
    const token = localStorage.getItem('token');
    return axios.get(`http://localhost:3001/${Endpoints[formType]}/${id || ''}`, { headers: {
      Authorization: token || null,
    } });
  };

  const getProductsURL = 'http://localhost:3001/products';
  const getProducts = () => {
    axios.get(getProductsURL)
      .then((res) => {
        setProducts(res.data.result);
      });
  };

  const postShoppingCartURL = 'http://localhost:3001/sale';
  const postShoppingCart = () => {
    axios.post(postShoppingCartURL, { shoppingCart, delivery, total })
      .then((res) => {
        console.log(res);
      });
  };

  /// ////////////////////////ComponentDidMount//////////////////////// ///

  useEffect(() => {
    const fetchProducts = (async () => {
      await getProducts();
    });
    fetchProducts();
    setDelivery({ address: 'string', number: 99 });
    setTotal(0);
  }, []);

  // Atualiza o valor Total no botão de Checkout
  useEffect(() => {
    function sum() {
      const items = Object.values(shoppingCart);
      const soma = items.reduce((acc, { productQuant, productPrice }) => (
        acc + productQuant * productPrice
      ), 0);
      setTotal(soma.toFixed(2).toString().replace('.', ','));
    }
    sum();
  }, [shoppingCart]);

  /// ////////////////////////Components Functions//////////////////////// ///

  const submitChange = (e, formType) => {
    e.preventDefault();
    return postSubmit(Endpoints[formType]);
  };

  const deleteProduct = (id) => {
    delete shoppingCart[id];
    const spread = { ...shoppingCart };
    setShoppingCart(spread);
  };

  return (
    <Context.Provider
      value={ {
        setUser,
        get,
        user,
        post,
        submitChange,
        shoppingCart,
        products,
        setDelivery,
        delivery,
        postShoppingCart,
        deleteProduct,
        setShoppingCart,
        setSellers,
        sellers,
        socket,
        total } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
