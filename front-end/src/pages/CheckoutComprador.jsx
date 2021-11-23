import React, { useContext, useEffect, useState } from 'react';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/Header/Header';
import CheckoutProduct from '../components/checkoutProduct';
import { getSeler } from '../API/dataBaseCall';

export default function CheckoutComprador() {
  const { aux, total } = useContext(CheckoutContext);
  const userData = localStorage.getItem('user');
  const [seller, setSeller] = useState([]);
  const userName = JSON.parse(userData);

  async function getSellerId(user) {
    const sellerIncome = await getSeler(user);
    setSeller(sellerIncome);
    setLoading(false);
  }

  useEffect(() => {
    getSellerId(userName.token);
  }, [userName.token]);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Finalizar pedido</h1>
      {aux.map(({ id, title, name, price, qtd }, i) => (
        <CheckoutProduct
          id={ id }
          title={ title }
          name={ name }
          price={ price }
          qtd={ qtd }
          index={ i }
          key={ i }
        />
      ))}
      <h3 data-testid="customer_checkout__element-order-total-price">
        {`TOTAL R$ ${total}`}
      </h3>
      <select>
        {seller.map((sellerid) => (
          <option key={ sellerid.index }>{sellerid.name}</option>
        ))}
      </select>
    </div>
  );
}
