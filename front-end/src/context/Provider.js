/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Context from './Context';
import mockProducts from './mockAPI';

const Endpoints = {
  login_form: 'login',
  registration_form: 'register',
};

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [cartSum, setCartSum] = useState(0);

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

  // const getProductsURL = 'http://localhost:3001/products';
  const getProducts = () => {
    // axios.get(getProductsURL)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     setProducts(res.data);
    //   });
    const data = mockProducts();
    console.log(data);
    setProducts(data);
  };

  const postShoppingCartURL = 'http://localhost:3001/xxx';
  const postShoppingCart = () => {
    axios.post(postShoppingCartURL, { shoppingCart })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // Aguardar: Retorno do Back para prosseguir
      });
  };
  /// ////////////////////////ComponentDidMount//////////////////////// ///
  useEffect(() => {
    // Recebe produtos do BackEnd para renderização
    // const fetchProducts = (async () => {
    //   await getProducts();
    // });
    // const emptyArray = [];
    // setShoppingCart(emptyArray);
    getProducts();
    setCartSum(0);
    // console.log(fetchProducts);
  }, []);

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
  const addProduct = (e) => {
    const { name } = e.target;
    const currentItemsinCart = Object.keys(shoppingCart);
    if (currentItemsinCart.includes(name)) {
      const update = shoppingCart[name].quant;
      return setShoppingCart({ ...shoppingCart,
        [name]: { ...[name], quant: update + 1 } });
    }
    const cart = {
      id: name,
      quant: 1,
    };
    const spread = { ...shoppingCart, [name]: cart };
    setShoppingCart(spread);
  };

  return (
    <Context.Provider
      value={ {
        setUser,
        user,
        handleChange,
        submitChange,
        products,
        submitShoppingCart,
        addProduct,
        cartSum } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
