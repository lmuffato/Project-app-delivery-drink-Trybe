import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import OrderItemCard from '../components/OrderItemCard';

function CustomerCheckout() {
  const { cart } = useSelector((state) => state.product);

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
      <p data-testid="customer_checkout__element-order-total-price">Total: R$ 28,46</p>
      <form>
        <select data-testid="customer_checkout__select-seller">
          <option>Fulana Pereira</option>
          <option>Cicrano da Silva</option>
        </select>
        <input data-testid="customer_checkout__input-address" type="text" />
        <input data-testid="customer_checkout__input-addressNumber" type="number" />
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
