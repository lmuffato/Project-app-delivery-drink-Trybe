/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';// https://github.com/tryber/sd-10a-live-lectures/pull/89/files
import Context from './Context';

const socket = io('http://localhost:3001');

const Endpoints = {
  login_form: 'login',
  registration_form: 'register',
  checkout_form: 'sale',
  seller_orders: 'seller/orders',
};

function Provider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState({});
  const [sellers, setSellers] = useState([{ name: 'rogerin', sellerId: '1' }]);
  const [sellerId, setSellerId] = useState();

  /// ////////////////////////Link with BackEnd//////////////////////// ///

  const postSubmit = (url) => axios.post(`http://localhost:3001/${url}`, user);
  const post = (formType, data) => axios.post(`http://localhost:3001/${Endpoints[formType]}`, data);
  const get = (formType, id) => axios.get(`http://localhost:3001/${Endpoints[formType]}/${id}`);

  const getProductsURL = 'http://localhost:3001/products';
  const getProducts = () => {
    axios.get(getProductsURL)
      .then((res) => {
        setProducts(res.data.result);
      });
  };

  const postShoppingCartURL = 'http://localhost:3001/sale';
  const postShoppingCart = async () => {
    const token = localStorage.getItem('token');
    const objectCart = {};
    Object.entries(shoppingCart).forEach((item) => {
      objectCart[item[0]] = item[1].productQuant;
    });

    const totalToNumber = Number(total.replace(',', '.')).toFixed(2);

    const request = await axios.post(postShoppingCartURL,
      { shoppingCart: objectCart, delivery, total: totalToNumber, sellerId }, {
        headers: {
          authorization: token,
        } });
    navigate(`/customer/orders/${request.data.id}`);
    return request.data.id;
  };

  /// ////////////////////////ComponentDidMount//////////////////////// ///

  useEffect(() => {
    const fetchProducts = (async () => {
      await getProducts();
    });
    fetchProducts();
    setDelivery({ deliveryAddress: 'string', deliveryNumber: 99 });
    setTotal(0);
  }, []);

  // Atualiza o valor Total no botão de Checkout
  useEffect(() => {
    function sum() {
      const itens = Object.entries(shoppingCart);
      const teste = itens.map((item) => {
        const A = parseFloat(Object.values(item[1])[2]);
        const B = parseFloat(Object.values(item[1])[3]);
        return (A * B).toFixed(2);
      });
      const soma = teste.reduce((acc, item) => acc + parseFloat(item), 0);
      setTotal(soma.toFixed(2).toString().replace('.', ','));
    }
    sum();
  }, [shoppingCart]);

  /// ////////////////////////Components Functions//////////////////////// ///

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setuser = { ...user,
      [name]: value,
    };
    setUser(setuser);
  };

  const submitChange = (e, formType) => {
    e.preventDefault();
    return postSubmit(Endpoints[formType]);
  };

  // Função disparada no onClick no ProductCard
  const addProduct = (name, id, price) => {
    const currentItemsinCart = Object.keys(shoppingCart);
    if (currentItemsinCart.includes(id.toString())) {
      const update = shoppingCart[id].productQuant;
      return setShoppingCart({ ...shoppingCart,
        [id]: {
          productId: id, productName: name, productPrice: price, productQuant: update + 1,
        } });
    }
    const cart = {
      productId: id,
      productName: name,
      productPrice: price,
      productQuant: 1,
    };
    const spread = { ...shoppingCart, [id]: cart };
    setShoppingCart(spread);
  };

  const subProduct = (name, id, price) => {
    const currentItemsinCart = Object.keys(shoppingCart);
    if (currentItemsinCart.includes(id.toString())) {
      const update = shoppingCart[id].productQuant;
      if (update === 0) return null;
      return setShoppingCart({ ...shoppingCart,
        [id]: {
          productId: id, productName: name, productPrice: price, productQuant: update - 1,
        } });
    }
  };

  const inputProduct = (name, id, price, value) => {
    const currentItemsinCart = Object.keys(shoppingCart);
    if (currentItemsinCart.includes(id.toString())) {
      return setShoppingCart({ ...shoppingCart,
        [id]: {
          productId: id,
          productName: name,
          productPrice: price,
          productQuant: parseInt(value, 10),
        } });
    }
    const cart = {
      productId: id,
      productName: name,
      productPrice: price,
      productQuant: parseInt(value, 10),
    };
    const spread = { ...shoppingCart, [id]: cart };
    setShoppingCart(spread);
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
        handleChange,
        submitChange,
        shoppingCart,
        products,
        setDelivery,
        delivery,
        addProduct,
        subProduct,
        postShoppingCart,
        inputProduct,
        deleteProduct,
        setSellerId,
        socket,
        sellers,
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
