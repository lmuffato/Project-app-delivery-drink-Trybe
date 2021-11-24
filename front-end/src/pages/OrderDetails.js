import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderDescription from '../components/OrderDescription';

function OrderDetails() {
  const { role } = useSelector((state) => state.user);
  const [prefix, setPrefix] = useState('');
  const [order, setOrder] = useState({});
  const [gotOrder, setGotOrder] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setPrefix(role === 'customer'
      ? 'customer_order_details__'
      : 'seller_order_details__');

    axios.get(`http://localhost:3001/sales/${id}`)
      .then((res) => {
        setOrder(res.data);
        setGotOrder(true);
      });
  }, [id, role]);

  return (
    <>
      <NavBar />
      Detalhes do Pedido
      { gotOrder && (
        <div>
          <OrderDescription
            prefix={ prefix }
            order={ order }
            role={ role }
          />
          <table style={ { border: '1px solid black' } }>
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Descrição</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Valor Unitário</th>
                <th scope="col">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {
                order.products.map((product, i) => (
                  <tr key={ product.id }>
                    <td
                      data-testid={ `${prefix}element-order-table-item-number-${i}` }
                    >
                      { i + 1 }
                    </td>
                    <td data-testid={ `${prefix}element-order-table-name-${i}` }>
                      { product.name }
                    </td>
                    <td data-testid={ `${prefix}element-order-table-quantity-${i}` }>
                      { product.SaleProduct.quantity }
                    </td>
                    <td data-testid={ `${prefix}element-order-table-unit-price-${i}` }>
                      R$
                      { ' ' }
                      { product.price.replace('.', ',') }
                    </td>
                    <td data-testid={ `${prefix}element-order-table-sub-total-${i}` }>
                      R$
                      { ' ' }
                      { (product.price * product.SaleProduct.quantity).toFixed(2)
                        .replace('.', ',') }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <p
            data-testid={ `${prefix}element-order-total-price` }
          >
            Total: R$
            { order.totalPrice.replace('.', ',') }
          </p>
        </div>
      ) }
    </>
  );
}

export default OrderDetails;
