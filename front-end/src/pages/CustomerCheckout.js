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
            cart
              .map((product) => <OrderItemCard product={ product } key={ product.id } />)
          }
        </tbody>
      </table>
    </>
  );
}

export default CustomerCheckout;
