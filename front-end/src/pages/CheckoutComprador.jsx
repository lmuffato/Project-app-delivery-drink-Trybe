import React, { useContext, useEffect, useState } from 'react';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/Header/Header';
import CheckoutProduct from '../components/checkoutProduct';
import { getSeler } from '../API/dataBaseCall';

export default function CheckoutComprador() {
  const { aux, total } = useContext(CheckoutContext);
  console.log('📓 ~ file: CheckoutComprador.jsx ~ line 9 ~ CheckoutComprador ~ aux', aux);
  const userData = localStorage.getItem('user');
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [chooseSeller, setChooseSeller] = useState('Fulana Pereira');
  const [addressNumber, setAddressNumber] = useState('');
  const userName = JSON.parse(userData);

  async function getSellerId(user) {
    const sellerIncome = await getSeler(user);
    setSeller(sellerIncome);
  }
  console.log(chooseSeller);

  function handleSeller({ target: { value } }) {
    setChooseSeller(value);
  }

  function handleAddress({ target: { value } }) {
    setAddress(value);
  }

  function handleNumber({ target: { value } }) {
    setAddressNumber(value);
  }

  useEffect(() => {
    getSellerId(userName.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Finalizar pedido</h1>
      {aux.map(({ id, name, price, qtd }, i) => (
        <CheckoutProduct
          id={ id }
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
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ handleSeller }
          value={ chooseSeller }
        >
          {seller.map((sellerid) => (
            <option key={ sellerid.index } value={ sellerid.name }>
              {sellerid.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Digite seu Endereço"
          onChange={ handleAddress }
          value={ address }
          data-testid="customer_checkout__input-address"
        />
        <input
          type="text"
          placeholder="numero"
          onChange={ handleNumber }
          value={ addressNumber }
          data-testid="customer_checkout__input-addressNumber"
        />
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
