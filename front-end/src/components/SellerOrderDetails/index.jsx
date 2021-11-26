import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import styles from './styles.module.css';
import { useSellerOrderDetails } from '../../context/sellerOrderDetailsProvider';
import formatDate from '../../utils/formatDate';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import updateStatusSale from '../../services/UpdateSale/updateStatusSale';
import { useSocket } from '../../context/socketProvider';

const socket = io.connect('http://localhost:3001');

export default function SellerOrderDetails({ dataTestIds }) {
  const [disabledPendingButton, setDisablePendingButton] = useState(false);
  const [disabledDeliveryButton, setDisabledDeliveryButton] = useState(true);
  const { sale, setSale, products } = useSellerOrderDetails();
  const { socketStatus } = useSocket();
  const { status } = sale;

  useEffect(() => {
    if (sale.status !== 'Pendente' && sale.status) {
      setDisablePendingButton(true);
    }
  }, [sale.status]);

  useEffect(() => {
    if (sale.status === 'Preparando' && sale.status) {
      setDisabledDeliveryButton(false);
    }
  }, [sale.status]);

  const handleChangeStatus = (myStatus) => {
    const { id } = sale;
    updateStatusSale(id, setSale, myStatus);
    setDisabledDeliveryButton(true);
    socket.emit('changeStatus', { id, myStatus });
  };

  return (
    <main className={ styles.container }>
      <section className={ styles.orderDetails }>
        <h3>
          <span>Pedido</span>
          {' '}
          <span data-testid={ dataTestIds['54'] }>{sale.id}</span>
        </h3>

        <span
          data-testid={ dataTestIds['56'] }
        >
          {sale.saleDate && formatDate(sale.saleDate) }
        </span>

        <span
          className={ styles[status ? status
            .toLowerCase().replace('â', 'a').replace(' ', '') : null] }
          data-testid={ dataTestIds['55'] }
        >
          {socketStatus ? socketStatus.myStatus : sale.status}
        </span>

        <button
          disabled={ disabledPendingButton }
          data-testid={ dataTestIds['57'] }
          onClick={ () => handleChangeStatus('Preparando') }
          type="button"
        >
          PREPARAR PEDIDO
        </button>

        <button
          disabled={ disabledDeliveryButton }
          data-testid={ dataTestIds['58'] }
          onClick={ () => handleChangeStatus('Em Trânsito') }
          type="button"
        >
          SAIU PARA ENTREGA
        </button>

      </section>
      <table className={ styles.tableContainer }>
        <thead className={ styles.tableHead }>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={ product.id }>
              <td data-testid={ `${dataTestIds['59']}${index}` }>{index + 1}</td>
              <td data-testid={ `${dataTestIds['60']}${index}` }>{product.name}</td>
              <td data-testid={ `${dataTestIds['61']}${index}` }>
                {product.SaleProduct.quantity}
              </td>
              <td>
                <span>R$</span>
                {' '}
                <span data-testid={ `${dataTestIds['62']}${index}` }>
                  {product.price}
                </span>
              </td>
              <td>
                <span>R$</span>
                {' '}
                <span data-testid={ `${dataTestIds['63']}${index}` }>
                  {(product.price * product.SaleProduct.quantity).toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={ styles.totalPriceContainer }>
        <div className={ styles.totalPrice }>
          <span>Total:</span>
          {' '}
          <span data-testid={ dataTestIds['64'] }>
            {sale.totalPrice && replaceDotToComma(sale.totalPrice) }
          </span>
        </div>
      </div>
    </main>
  );
}

SellerOrderDetails.propTypes = {
  saleData: PropTypes.object,
}.isRequired;
