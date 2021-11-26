import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderItemCard from '../components/OrderItemCard';
import { calcCartTotal } from '../components/ultility';

const handleSelectChange = (ev, setter) => {
  setter(+ev.target.value);
};

const formatCartProducts = (product) => ({
  id: product.id,
  quantity: product.quantity,
});

function CustomerCheckout() {
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [selectValue, setSelectValue] = useState(2);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);
  const { cart } = useSelector((state) => state.product);
  const { id } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    setTotalPrice(calcCartTotal(cart).toFixed(2).replace('.', ','));
  }, [cart]);

  function handleAddressChange({ target: { value } }) {
    setDeliveryAddress(value);
  }

  function handleAddressNumChange({ target: { value } }) {
    setDeliveryNumber(+value);
  }

  function handleOrderFormSubmit(ev) {
    ev.preventDefault();
    axios.post('http://localhost:3001/sales', {
      userId: id,
      sellerId: selectValue,
      totalPrice: +totalPrice.replace(',', '.'),
      deliveryAddress,
      deliveryNumber,
      products: cart.map(formatCartProducts),
      status: 'Pendente',
    }, { headers: { Authorization: JSON.parse(localStorage.getItem('user')).token } })
      .then(((res) => {
        history.push(`/customer/orders/${res.data.sale.id}`);
      }))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <NavBar />
      Finalizar Pedido

      <table style={ { border: '1px solid black' } }>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unitário</th>
            <th scope="col">Sub-total</th>
            <th scope="col">Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(
              (product, i) => (
                <OrderItemCard product={ product } index={ i } key={ product.id } />
              ),
            )
          }
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price">
        Total: R$
        <span>
          {totalPrice}
        </span>
      </p>
      <form onSubmit={ handleOrderFormSubmit }>
        <select
          data-testid="customer_checkout__select-seller"
          value={ selectValue }
          onChange={ (ev) => handleSelectChange(ev, setSelectValue) }
        >
          <option value="2">Fulana Pereira</option>
          <option value="3">Cicrano da Silva</option>
        </select>
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          placeholder="Endereço"
          value={ deliveryAddress }
          onChange={ handleAddressChange }
        />
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="number"
          placeholder="Nº"
          value={ deliveryNumber }
          onChange={ handleAddressNumChange }
        />
        <button
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          FINALIZAR PEDIDO
        </button>
      </form>

    </>
  );
}

export default CustomerCheckout;
