import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import './CustomerCheckout.css';
import CheckoutBtn from '../components/CheckoutBtn';
import CheckoutTr from '../components/CheckoutTr';
import CustomerNavBar from '../components/CustomerNavBar';
import SendOrder from '../components/SendOrder';
import CartContext from '../contexts/CartContext';

function CustomerCheckout() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <CustomerNavBar />
      <h3>Finalizar Pedido</h3>
      <Table striped bordered hover variant="dark" className="checkout-table">
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item, index) => {
              if (item.quantity > 0) {
                return <CheckoutTr key={ item.name } item={ item } index={ index } />;
              }
              return null;
            })
          }
        </tbody>
      </Table>
      <CheckoutBtn testId="customer_checkout__element-order-total-price" />
      <SendOrder className="send-form" />
    </div>
  );
}

export default CustomerCheckout;
