import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
import io from 'socket.io-client';
import updateStatusSale from '../../services/UpdateSale/updateStatusSale';
import styles from './styles.module.css';
/* import { useOrderDetails } from '../../context/orderDetailsProvider'; */
import formatDate from '../../utils/formatDate';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';
import { useSocket } from '../../context/socketProvider';
import { useSellerOrderDetails } from '../../context/sellerOrderDetailsProvider';

const socket = io.connect('http://localhost:3001');

export default function OrderDetails({ dataTestIds }) {
  const [disabledButton, setDisableButton] = useState(false);

  const { sale, setSale, seller, products } = useSellerOrderDetails();
  const { socketStatus } = useSocket();

  const { status } = sale;

  useEffect(() => {
    if (sale.status !== 'Em Trânsito' && sale.status) {
      setDisableButton(true);
    }
  }, [sale]);

  useEffect(() => {
    if (!socketStatus) return;
    if (socketStatus.myStatus === 'Em Trânsito') {
      setDisableButton(false);
    }
  }, [socketStatus]);

  const handleDelivered = (myStatus) => {
    const { id } = sale;
    updateStatusSale(id, setSale, myStatus);
    socket.emit('changeStatus', { id, myStatus });
  };

  /* if (!sale) return 'Loading'; */
  return (
    <main className={ styles.container }>
      <section className={ styles.orderDetails }>
        <h3>
          <span>Pedido:</span>
          {' '}
          <span data-testid={ dataTestIds['37'] }>{sale.id}</span>
        </h3>
        <div>
          <span>Vendedor:</span>
          {' '}
          <span data-testid={ dataTestIds['38'] }>{seller.name}</span>
        </div>
        <span
          data-testid={ dataTestIds['39'] }
        >
          {sale.saleDate ? formatDate(sale.saleDate) : null}
        </span>

        <span
          className={ styles[status ? status
            .toLowerCase().replace('â', 'a').replace(' ', '') : null] }
          data-testid={ dataTestIds['40'] }
        >
          {socketStatus ? socketStatus.myStatus : sale.status}
        </span>

        <button
          disabled={ disabledButton }
          data-testid={ dataTestIds['47'] }
          onClick={ () => handleDelivered('Entregue') }
          type="button"
        >
          marcar como entregue
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
              <td data-testid={ `${dataTestIds['41']}${index}` }>{index + 1}</td>
              <td data-testid={ `${dataTestIds['42']}${index}` }>{product.name}</td>
              <td data-testid={ `${dataTestIds['43']}${index}` }>
                {product.SaleProduct.quantity}
              </td>
              <td>
                <span>R$</span>
                {' '}
                <span data-testid={ `${dataTestIds['44']}${index}` }>
                  {product.price}
                </span>
              </td>
              <td>
                <span>R$</span>
                {' '}
                <span data-testid={ `${dataTestIds['45']}${index}` }>
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
          <span data-testid={ dataTestIds['46'] }>
            {sale.totalPrice ? replaceDotToComma(sale.totalPrice) : null}
          </span>
        </div>
      </div>
    </main>
  );
}

OrderDetails.propTypes = {
  saleData: PropTypes.object,
}.isRequired;
