import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../../context/checkoutContext';
import Header from '../../components/Header/Header';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';
import { getSeler, sendRequest } from '../../API/dataBaseCall';
import CheckoutContainer from './checkouCompradorElements';
import Form from '../../components/checkoutProduct/checkoutForm';

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
    <CheckoutContainer>
      <div>
        <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
        <h1>Finalizar pedido</h1>
        <fieldset className="fieldSet-1">
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
            {` Total: R$ ${totalValue}`}
          </h3>
        </fieldset>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <fieldset className="fildSet-2">
          <Form
            setAddress={ setAddress }
            setChooseSeller={ setChooseSeller }
            setAddressNumber={ setAddressNumber }
            value={ { chooseSeller, seller, address, addressNumber } }
          />
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ handleEndRequest }
          >
            FINALIZAR PEDIDO
          </button>
        </fieldset>
      </div>
    </CheckoutContainer>
  );
}
