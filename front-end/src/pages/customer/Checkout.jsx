import React, { useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { formatMoney } from 'accounting';
import { useHistory } from 'react-router';
import { AuthContext } from '../../contexts/auth';
import { cartContext } from '../../contexts/cart';
import api from '../../services/api';
import useInputs from '../../hooks/useInputs';

export default function Checkout() {
  const { user: userContext } = useContext(AuthContext);
  const { cartItens, removeFromCart } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [inputs, setInputs] = useInputs({ seller: '', address: '', number: '' });
  const history = useHistory();

  useEffect(() => {
    const total = cartItens.reduce((acc, curr) => acc + Number(curr.subTotal), 0);
    setTotalPrice(total);
  }, [cartItens]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/register');
      const users = response.data;
      const filteredToSellers = users.filter((user) => user.role === 'seller');
      setSellers(filteredToSellers);
    })();
  }, []);

  async function finishOrder(event) {
    event.preventDefault();
    const products = cartItens.map(
      (item) => ({ productId: item.id, quantity: item.quantity }),
    );
    const payload = jwt.verify(
      userContext.token, process.env.REACT_APP_JWT_SECRET_KEY || 'senha_dificil',
    );
    const response = await api.post('/sales', {
      userId: payload.login.id,
      sellerId: inputs.seller,
      totalPrice,
      deliveryAddress: inputs.address,
      deliveryNumber: inputs.number,
      status: 'Pendente',
      products,
    }, {
      headers: {
        authorization: userContext.token,
      },
    });

    const { id } = response.data;

    history.push(`/customer/orders/${id}`);
  }

  return (
    <>
      <h1>Finalizar pedido</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          { cartItens.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {item.title}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {item.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {formatMoney(item.price, { symbol: '', decimal: ',' })}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {formatMoney(item.subTotal, { symbol: '', decimal: ',' })}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button type="button" onClick={ () => removeFromCart(item.id) }>
                  Remover item
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        Total:
        <span>{formatMoney(totalPrice, { symbol: '', decimal: ',' })}</span>
      </h1>

      <h1>Detalhes e endereço para entrega</h1>
      <form onSubmit={ finishOrder }>
        <label htmlFor="seller">
          P. vendedora responsável:
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ setInputs }
            value={ inputs.seller }
          >
            <option value="" disabled hidden>Selecione uma pessoa</option>
            { sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{seller.name}</option>
            )) }
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            onChange={ setInputs }
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="number"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ setInputs }
          />
        </label>
        <button type="submit" data-testid="customer_checkout__button-submit-order">
          Finalizar pedido
        </button>
      </form>
    </>
  );
}
