import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { statusChange } from '../utils/Data';
import dateFormatation, { priceFormat } from '../utils/Format';
// import Header from '../Components/Header';

export default function SellerOrderDetails() {
  const [order, setOrder] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [orderReady, setOrderReady] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  const { id } = useParams;

  const dataTestIds = {
    labelOrderId: 'seller_order_details__element-order-details-label-order-id',
    deliveryStatus: 'seller_order_details__element-order-details-label-delivery-status',
    orderDate: 'seller_order_details__element-order-details-label-order-date',
    buttonPreparingCheck: 'seller_order_details__button-preparing-check',
    buttonDispatchCheck: 'seller_order_details__button-dispatch-check',
    itemNumber: 'seller_order_details__element-order-table-item-number-',
    tableName: 'seller_order_details__element-order-table-name->',
    tableQuantity: 'seller_order_details__element-order-table-quantity-',
    tableUnitPrice: 'seller_order_details__element-order-table-unit-price-',
    tableSuTotal: 'seller_order_details__element-order-table-sub-total-',
    totalPrice: 'seller_order_details__element-order-total-price',
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    let newStatus;

    if (name === 'prepare-order') {
      newStatus = 'Preparando';
      setInProgress(!inProgress);
      setOrderReady(!orderReady);
      statusChange({ token, id, newStatus });
    } else {
      newStatus = 'Em Trânsito';
      setOrderReady(!orderReady);
      statusChange({ token, id, newStatus });
    }
  };

  useEffect(() => {
    (async () => {
      const orderData = await fetch(`http://localhost:3001/orderDetails/${id}`);
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
    <div>
      <h1>Detalhes do pedido - vendedor</h1>
      <div className="card-top-bar">
        <div data-testid={ dataTestIds.labelOrderId }>{`Pedido ${priceFormat(id)}`}</div>
        <div data-testid={ dataTestIds.orderDate }>{dateFormatation(order.saleDate)}</div>
        <div data-testid={ dataTestIds.deliveryStatus }>{order.status}</div>
        <button
          data-testid={ dataTestIds.buttonPreparingCheck }
          name="prepare-order"
          disabled={ inProgress }
          onClick={ handleClick }
          type="button"
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid={ dataTestIds.buttonDispatchCheck }
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
                <div data-testid={ `${dataTestIds.itemNumber}${index}` }>{index}</div>
                <div data-testid={ `${dataTestIds.tableName}${index}` }>
                  {description}
                </div>
                <div data-testid={ `${dataTestIds.tableQuantity}${index}` }>
                  {quantity}
                </div>
                <div data-testid={ `${dataTestIds.tableUnitPrice}${index}` }>
                  {priceFormat(unitaryValue)}
                </div>
                <div data-testid={ `${dataTestIds.tableSuTotal}${index}` }>
                  {priceFormat(subTotal)}
                </div>
              </li>
            ))}
        </ul>
        <div data-testid={ dataTestIds.totalPrice }>{priceFormat(order.totalPrice)}</div>
      </div>
    </div>
  );
}
