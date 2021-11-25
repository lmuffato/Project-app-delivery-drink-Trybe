import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/Header/Header';
import CheckoutProduct from '../components/checkoutProduct/checkoutProduct';
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
    const sellerId = seller.find((vendedor) => vendedor.name === chooseSeller);
    if (!sellerId) return;
    const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
    const atualDate = `${year}-${month}-${date}`;
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
      <h1 style={ { marginLeft: '20px' } }>Finalizar pedido</h1>
      <fieldset
        style={ {
          paddingTop: '50px',
          marginLeft: '30px',
          marginRight: '30px' } }
      >
        {aux.map(({ productId, name, price, quantity }, i) => (
          <CheckoutProduct
            id={ productId }
            name={ name }
            price={ price }
            qtd={ quantity }
            index={ i }
            key={ i }
          />
        ))}
        <h3
          data-testid="customer_checkout__element-order-total-price"
          style={ {
            textAlign: 'center',
            fontSize: '2em',
            marginRight: '190px',
            marginTop: '50px',
            paddingTop: '15px',
            backgroundColor: 'hsl(0 0% 20%)',
            color: 'white',
            width: '250px',
            height: '60px',
            position: 'relative',
            float: 'right',
            borderRadius: '5px' } }
        >
          {` Total: R$ ${totalValue}`}
        </h3>
      </fieldset>
      <h1 style={ { marginLeft: '20px' } }>Detalhes e Endereço para Entrega</h1>
      <fieldset
        style={ {
          paddingTop: '20px',
          marginTop: '30px',
          marginLeft: '30px',
          marginRight: '30px' } }
      >
        <form style={ { display: 'flex', justifyContent: 'space-around' } }>
          <label
            htmlFor="vendedor"
            style={ { display: 'block', textAlign: 'center' } }
          >
            Vendedor responsável
            <br />
            <select
              id="vendedor"
              style={ { height: '40px', width: '250px' } }
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
          </label>
          <label
            htmlFor="Endereço"
            style={ { display: 'block', textAlign: 'center', marginLeft: '-80px' } }
          >
            Endereço
            <br />
            <input
              id="Endereço"
              style={ { height: '34px', width: '550px' } }
              type="text"
              placeholder="Digite seu Endereço"
              onChange={ handleAddress }
              value={ address }
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label
            htmlFor="numero"
            style={ { display: 'block', textAlign: 'center', marginLeft: '-80px' } }
          >
            Número
            <br />
            <input
              id="numero"
              style={ { height: '34px', width: '250px' } }
              type="text"
              placeholder="Número"
              onChange={ handleNumber }
              value={ addressNumber }
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </form>
        <button
          style={ {
            fontSize: '1em',
            display: 'block',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '5px',
            backgroundColor: 'hsl(0 0% 20%)',
            color: 'white',
            width: '250px',
            height: '60px',
            borderRadius: '5px' } }
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ handleEndRequest }
        >
          FINALIZAR PEDIDO
        </button>
      </fieldset>
    </div>
  );
}
