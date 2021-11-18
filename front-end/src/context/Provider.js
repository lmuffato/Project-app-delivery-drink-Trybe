/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';// https://github.com/tryber/sd-10a-live-lectures/pull/89/files
import Context from './Context';
import mockProducts from './mockAPI';

const socket = io('http://localhost:3001');

const Endpoints = {
  login_form: 'login',
  registration_form: 'register',
};

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState({});

  // user {
  // name: 'John',
  // email: 'john@example.com'
  // role: 'customer/entregador'
  // token: 'retorno do Back'
  // }

  // UseEffect para salvar no localStorage
  // Há um ComponentDidMount após Link with BackEnd

  /// ////////////////////////Link with BackEnd//////////////////////// ///

  const postSubmit = (url) => axios.post(`http://localhost:3001/${url}`, user);

  const getProductsURL = 'http://localhost:3001/products';
  const getProducts = () => {
    axios.get(getProductsURL)
      .then((res) => {
        setProducts(res.data.result);
      });    
  };

  const postShoppingCartURL = 'http://localhost:3001/products';
  const postShoppingCart = () => {
    axios.post(postShoppingCartURL, { shoppingCart, delivery, total })
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        // Aguardar: Retorno do Back para prosseguir
      });
  };
  /// ////////////////////////ComponentDidMount//////////////////////// ///
  useEffect(() => {
    const fetchProducts = (async () => {
      await getProducts();
    });
    fetchProducts();
    setDelivery({ deliveryAndress: 'string', deliveryNumber: 99 });
    setTotal(0);
  }, []);

  // Atualiza o valor Total no botão de Checkout
  useEffect(() => {
    function sum() {
      const itens = Object.entries(shoppingCart);
      const teste = itens.map((item) => {
        console.log(Object.values(item[1])[2]);
        console.log(Object.values(item[1])[3]);

        const A = parseFloat(Object.values(item[1])[2]);
        const B = parseFloat(Object.values(item[1])[3]);
        return (A * B).toFixed(2);
      });
      const soma = teste.reduce((acc, item) => acc + parseFloat(item), 0);
      setTotal(soma);
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

  // Função para enviar o ShoppingCart para o BackEnd
  const submitShoppingCart = async () => {
    await postShoppingCart();
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

  return (
    <Context.Provider
      value={ {
        setUser,
        user,
        handleChange,
        submitChange,
        shoppingCart,
        products,
        submitShoppingCart,
        addProduct,
        subProduct,
        postShoppingCart,
        inputProduct,
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
