import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import axios from "axios";

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  // user {
  // name: 'John',
  // email: 'john@example.com'
  // role: 'customer/entregador'
  // token: 'retorno do Back'
  // }

  // UseEffect para salvar no localStorage
  // Há um ComponentDidMount após Link with BackEnd

  /// ////////////////////////Link with BackEnd//////////////////////// ///

  const postURL = 'http://localhost:3001/register';
  const postSubmit = () => {
    axios.post(postURL, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // Aguardar: Retorno do Back para prosseguir
      });
  };

  const getProductsURL = 'http://localhost:3001/products';
  const getProducts = () => {
    axios.get(getProductsURL)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts(res.data);
      });
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
    const fetchProducts = (async () => {
      await getProducts();
    });
    console.log(fetchProducts);
  }, []);

  /// ////////////////////////Components Functions//////////////////////// ///

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setuser = { ...user,
      [name]: value,
    };
    setUser(setuser);
    console.log(setuser);
  };

  const submitChange = async (e) => {
    e.preventDefault();
    await postSubmit();
    console.log(user);
  };

  // Função para enviar o ShoppingCart para o BackEnd
  const submitShoppingCart = async () => {
    await postShoppingCart();
  };

  // Função disparada no onChange no ProductCard
  const addProduct = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // Preciso enviar: Nome e Quantidade
    setShoppingCart(name);
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
        addProduct } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
