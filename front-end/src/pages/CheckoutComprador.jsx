import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/Header/Header';
import CheckoutProduct from '../components/checkoutProduct/checkoutProduct';
import { getSeler, sendRequest } from '../API/dataBaseCall';

export default function CheckoutComprador() {
  const { aux, total } = useContext(CheckoutContext);
  const userData = localStorage.getItem('user');
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [chooseSeller, setChooseSeller] = useState('Fulana Pereira');
  const [addressNumber, setAddressNumber] = useState('');
  const userName = JSON.parse(userData);
  const totalValue = total.toFixed(2).toString().replace(/\./g, ',');
  const history = useHistory();

  async function getSellerId(user) {
    const sellerIncome = await getSeler(user);
    setSeller(sellerIncome);
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
        deliveryNumber: addressNumber,
        deliveryAddress: address,
        totalPrice: total,
        status: 'Pendente',
        userId: userName.id,
        saleDate: atualDate,
        sellerId: sellerId.id,
      },
      token: userName.token,
    });
    if (response) history.push(`/customer/orders/${response.id}`);
  }

  useEffect(() => {
    getSellerId(userName.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <fieldset>
        <h3 style={ { margin: '40px', padding: '5px' } }>Finalizar pedido</h3>
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
        <h3 data-testid="customer_checkout__element-order-total-price">
          {`${totalValue}`}
        </h3>
      </fieldset>

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
