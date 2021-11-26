import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { getSaleById } from '../API/dataBaseCall';

export default function PedidoEspecífico({ location }) {
  const user = localStorage.getItem('user');
  const userName = JSON.parse(user);
  const path = location.pathname;
  const split = path.split('orders/')[1];
  const saleID = parseInt(split, 10);
  const [products, setProducts] = useState([]);

  async function requestAPI() {
    const result = await getSaleById(userName.token, saleID);

    return result;
  }

  useEffect(async () => {
    const data = await requestAPI();
    setProducts(data.products);
  }, []);
  console.log(products);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Pedido Específico</h1>
    </div>
  );
}

PedidoEspecífico.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
