import React, { useContext, useState, useEffect } from 'react';
import { formatMoney } from 'accounting';
import { cartContext } from '../../contexts/cart';

export default function Checkout() {
  const { cartItens } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItens.reduce((acc, curr) => acc + Number(curr.subTotal), 0);
    setTotalPrice(total);
  }, [cartItens]);

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
                <button type="button">Remover item</button>
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
      <form>
        <label htmlFor="seller">
          P. vendedora responsável:
          <select id="seller" data-testid="customer_checkout__select-seller">
            <option value="ok">ok</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="number"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <button type="submit" data-testid="customer_checkout__button-submit-order">
          Finalizar pedido
        </button>
      </form>
    </>
  );
}
