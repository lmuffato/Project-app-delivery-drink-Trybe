import React, { useState, useEffect } from 'react';
import CheckoutCard from '../components/CheckoutCard';
import CustomerAddress from '../components/CustomerAddress';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [totalCheckout, setTotalCheckout] = useState(0);
  const colunas = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
    'Remover Item',
  ];

  useEffect(() => {
    setTotalCheckout(products
      .reduce((totalP, product) => totalP + product.total, 0));
    console.log('olá');
  });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  return (
    <>
      Finalizar Pedido
      <div>
        <table>
          <thead>
            <tr>
              { colunas.map((coluna, index) => (
                <th key={ index }>
                  { coluna }
                </th>
              )) }
              {/* <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th> */}
            </tr>
          </thead>
          <tbody>
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
          </tbody>
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
