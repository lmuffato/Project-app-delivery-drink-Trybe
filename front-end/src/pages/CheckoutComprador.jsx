import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/Header/Header';
import CheckoutProduct from '../components/checkoutProduct';
import { getSeler, sendRequest } from '../API/dataBaseCall';

const moment = require('moment');

export default function CheckoutComprador() {
  const { aux, total } = useContext(CheckoutContext);
  const userData = localStorage.getItem('user');
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [chooseSeller, setChooseSeller] = useState();
  const [loading, setLoading] = useState(true);
  const [addressNumber, setAddressNumber] = useState('');
  const userName = JSON.parse(userData);
  const totalValue = total.toFixed(2).toString().replace(/\./g, ',');
  const history = useHistory();

  async function getSellerId(user) {
    const sellerIncome = await getSeler(user);
    setSeller(sellerIncome);
    setLoading(false);
  }

  function handleSeller({ target: { value } }) {
    setChooseSeller(value);
  }

  function handleAddress({ target: { value } }) {
    setAddress(value);
  }

  function handleNumber({ target: { value } }) {
    setAddressNumber(value);
  }
  async function handleEndRequest() {
    console.log(seller);
    console.log(chooseSeller);
    const sellerId = seller.find((vendedor) => vendedor.name === chooseSeller);
    if (!sellerId) return;
    const response = await sendRequest({
      data: aux,
      sellInfo: {
        delivery_number: addressNumber,
        delivery_address: address,
        total_price: total,
        status: 'Pendente',
        user_id: userName.id,
        sale_date: moment().format(),
        seller_id: sellerId.id,
      },
      token: userName.token,
    });
    if (response) history.push(`/customer/orders/${response.id}`);
  }

  useEffect(() => {
    getSellerId(userName.token);
    if (loading === false) {
      setChooseSeller(seller[0].name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, chooseSeller]);

  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Finalizar pedido</h1>
      {aux.map(({ product_id: prodId, name, price, quantity }, i) => (
        <CheckoutProduct
          id={ prodId }
          name={ name }
          price={ price }
          qtd={ quantity }
          index={ i }
          key={ i }
        />
      ))}
      <h3 data-testid="customer_checkout__element-order-total-price">
        {`${totalValue}`}
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
        onClick={ handleEndRequest }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
