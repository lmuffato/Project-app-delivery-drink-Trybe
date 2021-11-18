import React, { useState, useEffect } from 'react';
import CheckoutCard from '../components/CheckoutCard';
import CustomerAddress from '../components/CustomerAddress';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [totalCheckout, setTotalCheckout] = useState(0);

  useEffect(() => {
    setTotalCheckout(products
      .reduce((totalP, product) => totalP + product.total, 0));
  });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('carrinho')));
  }, {});

  return (
    <>
      Finalizar Pedido
      <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {products.map((product, index) => (
            <CheckoutCard
              key={ index }
              index={ index }
              name={ product.name }
              qty={ product.quantity }
              price={ product.price }
              total={ product.total }
            />
          ))}
        </table>
        <div>
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            { `Total R$ ${totalCheckout.toFixed(2).replace('.', ',')}` }
          </span>
        </div>
      </div>
      <CustomerAddress />
    </>
  );
}

export default Checkout;
