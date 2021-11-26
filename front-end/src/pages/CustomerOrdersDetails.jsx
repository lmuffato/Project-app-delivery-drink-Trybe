import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getUsers, fetchSaleByID } from '../utils/API/fetch';
import { getTestID, formatTestID } from '../utils/functions';
import NavBar from '../components/NavBar';

export default function CustomerOrdersDetails() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [sellerName, setSellerName] = useState('');
  const { id: idOrder } = useParams();

  useEffect(() => {
    (async () => {
      const result = await fetchSaleByID(idOrder);
      const users = await getUsers();
      setOrderDetails(result);
      setSellerName(users.find(({ id }) => id === result.sellerId).name);
    })();
  }, [idOrder]);
  if (!orderDetails) return <div>Carregando...</div>;
  return (
    <div className="customer-orders-details-container">
      <NavBar />
      <div key={ orderDetails.id }>
        <h3>Detalhe do Pedido</h3>
        <p
          data-testid={ getTestID('37') }
        >
          { orderDetails.id }
        </p>
        <p
          data-testid={ getTestID('38') }
        >
          { sellerName }
        </p>
        <p
          data-testid={ getTestID('39') }
        >
          { moment(orderDetails.saleDate).format('DD/MM/YYYY') }
        </p>
        <p
          data-testid={ getTestID('40') }
        >
          { orderDetails.status }
        </p>
        { orderDetails.products.map((product, index) => (
          <ul key={ index }>
            <li
              data-testid={ formatTestID('41', index) }
            >
              { index }
            </li>
            <li
              data-testid={ formatTestID('42', index) }
            >
              { product.description }
            </li>
            <li
              data-testid={ formatTestID('43', index) }
            >
              { product.quantity }
            </li>
            <li
              data-testid={ formatTestID('44', index) }
            >
              { product.unitaryValue }
            </li>
            <li
              data-testid={ formatTestID('45', index) }
            >
              { (product.quantity * product.unitaryValue)
                .toFixed(2)
                .replace('.', ',')}
            </li>

          </ul>
        ))}
        <button
          type="button"
          data-testid={ getTestID('47') }
          disabled
        >
          MARCAR COMO ENTREGUE
        </button>
        <div data-testid={ getTestID('46') }>
          { (orderDetails.totalPrice)
            .toString()
            .replace('.', ',')}
        </div>
      </div>
    </div>
  );
}
