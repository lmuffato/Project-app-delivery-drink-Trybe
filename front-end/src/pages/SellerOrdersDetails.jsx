import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar';
import { formatDate, formatPrice,
  getTestID, formatTestID, leftPad } from '../utils/functions';
import { saleActionGetById, changeOrderStatus } from '../utils/API/fetch';

export default function SellerOrders() {
  const [order, setOrder] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [readyToDelivery, setReadyToDelivery] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  const { id } = useParams();

  const handleClick = ({ target }) => {
    const { name } = target;
    let newStatus;

    if (name === 'prepare-order') {
      newStatus = 'Preparando';
      setInProgress(!inProgress);
      setReadyToDelivery(!readyToDelivery);
      changeOrderStatus({ token, id, newStatus });
    } else {
      newStatus = 'Em Trânsito';
      setReadyToDelivery(!readyToDelivery);
      changeOrderStatus({ token, id, newStatus });
    }
  };

  useEffect(() => {
    (async () => {
      const orderData = await saleActionGetById(id);
      switch (orderData.status) {
      case 'Preparando':
        setInProgress(!inProgress);
        setReadyToDelivery(!readyToDelivery);
        break;
      case 'Em Trânsito':
        setInProgress(!inProgress);
        break;
      case 'Entregue':
        setInProgress(!inProgress);
        break;
      default:
        break;
      }
      setOrder(orderData);
    })();
  }, []);

  if (!order) return <p>Loading...</p>;
  return (
    <>
      <NavBar />
      <div className="card-top-bar">
        <div data-testid={ getTestID('54') }>{`Pedido ${leftPad(id)}`}</div>
        <div data-testid={ getTestID('56') }>{formatDate(order.saleDate)}</div>
        <div data-testid={ getTestID('55') }>{order.status}</div>
        <button
          data-testid={ getTestID('57') }
          name="prepare-order"
          disabled={ inProgress }
          onClick={ handleClick }
          type="button"
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid={ getTestID('58') }
          name="deliver-order"
          disabled={ !readyToDelivery }
          onClick={ handleClick }
          type="button"
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <div className="card-list">
        <ul>
          {order
            .products
            .map(({ description, quantity, unitaryValue, subTotal }, index) => (
              <li key={ index }>
                <div data-testid={ formatTestID('59', index) }>{index}</div>
                <div data-testid={ formatTestID('60', index) }>{description}</div>
                <div data-testid={ formatTestID('61', index) }>{quantity}</div>
                <div data-testid={ formatTestID('62', index) }>
                  {formatPrice(unitaryValue)}
                </div>
                <div data-testid={ formatTestID('63', index) }>
                  {formatPrice(subTotal)}
                </div>
              </li>
            ))}
        </ul>
        <div data-testid={ getTestID('64') }>{formatPrice(order.totalPrice)}</div>
      </div>
    </>
  );
}
