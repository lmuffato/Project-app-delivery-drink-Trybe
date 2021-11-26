import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
// import CheckoutProduct from '../components/checkoutProduct';
import { getSaleById } from '../API/dataBaseCall';

export default function PedidoEspecífico({ location }) {
  const user = localStorage.getItem('user');
  const userName = JSON.parse(user);
  const path = location.pathname;
  const idSale = path.split('orders/')[1];
  const idSaleNumber = parseInt(idSale, 10);
  console.log(idSaleNumber);

  async function sendRequestAPI() {
    const sale = await getSaleById(userName.token, idSaleNumber);
    console.log(sale);
  }
  useEffect(() => {
    sendRequestAPI();
  }, []);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Pedido Específico</h1>
      {/* <CheckoutProduct
              id={ prodId }
              name={ name }
              price={ price }
              qtd={ quantity }
              index={ i }
              key={ i } */}
    </div>
  );
}

PedidoEspecífico.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
