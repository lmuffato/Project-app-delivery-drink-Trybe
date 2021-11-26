import React, { useEffect, useState } from 'react';

import './style.css';
import PropTypes from 'prop-types';
import moment from 'moment';

function OrderBox({ props }) {
  const {
    id,
    status,
    sale_date: saleDate,
    total_price: totalPrice,
    products,
    seller,
  } = props.sale;

  console.log(status);

  const [isDisablePreparing, setIsDisablePreparing] = useState('');
  const [isDisableTransit, setIsDisableTransit] = useState('');

  useEffect(() => {
    if (status !== 'Pendente') {
      setIsDisablePreparing(true);
      setIsDisableTransit(false);
    }

    if (status !== 'Preparando') {
      setIsDisableTransit(true);
    }
  }, [status]);

  const { role, updateOrder } = props;

  const tesStatus = `${role}_order_details__element-order-details-label-delivery-status`;

  const checkTransit = 'Em Trânsito';

  const statusOrder = status === checkTransit ? 'Em-Transito' : status;

  const createCustomerButton = () => (
    <button
      type="button"
      disabled={ status !== checkTransit }
      data-testid="customer_order_details__button-delivery-check"
      onClick={ (event) => {
        event.preventDefault();
        updateOrder('Entregue');
      } }
    >
      MARCAR COMO ENTREGUE
    </button>
  );

  const createSellerName = () => (
    <p
      data-testid="customer_order_details__element-order-details-label-seller-name"
    >
      {`P. Vend: ${seller.name}`}
    </p>
  );

  const createSellerButtons = () => (
    <>
      <button
        type="button"
        disabled={ isDisablePreparing }
        data-testid="seller_order_details__button-preparing-check"
        onClick={ (event) => {
          event.preventDefault();
          console.log('Cheguei aqui no prepa');
          updateOrder('Preparando');
        } }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        disabled={ isDisableTransit }
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ (event) => {
          event.preventDefault();
          updateOrder('Em Trânsito');
        } }
      >
        SAIU PARA ENTREGA
      </button>
    </>
  );

  return (
    <div className="order-detail-container">
      <div className="order-info">
        <p
          data-testid={ `${role}_order_details__element-order-details-label-order-id` }
        >
          {`Pedido ${id}`}
        </p>
        { role === 'customer'
          ? createSellerName()
          : null }
        <p
          data-testid={ `${role}_order_details__element-order-details-label-order-date` }
        >
          {moment(saleDate).format('DD/MM/yyyy')}
        </p>
        <p
          className={ `order-status-${statusOrder}` }
          data-testid={ tesStatus }
        >
          {status}
        </p>
        { role === 'customer'
          ? createCustomerButton()
          : createSellerButtons() }
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>

        <tbody>
          { products.map((product, index) => {
            const { quantity } = product.quantityTotal;
            const subTotalValue = (quantity * Number(product.price)).toFixed(2);
            const dataTestIdTextTable = '_order_details__element-order-table-';

            return (
              <tr key={ product.id }>
                <td
                  data-testid={ `${role}${dataTestIdTextTable}item-number-${index}` }
                >
                  { product.id }
                </td>
                <td
                  data-testid={ `${role}${dataTestIdTextTable}name-${index}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={ `${role}${dataTestIdTextTable}quantity-${index}` }
                >
                  { quantity }
                </td>
                <td
                  data-testid={ `${role}${dataTestIdTextTable}unit-price-${index}` }
                >
                  { product.price }
                </td>
                <td
                  data-testid={ `${role}${dataTestIdTextTable}sub-total-${index}` }
                >
                  { subTotalValue }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="customer-order-total-price"
      >
        { 'Total: ' }
        <span
          data-testid={ `${role}_order_details__element-order-total-price` }
        >
          {totalPrice.replace('.', ',')}
        </span>
      </div>
    </div>
  );
}

OrderBox.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;

export default OrderBox;
