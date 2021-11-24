import React from 'react';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
import styles from './styles.module.css';
import { useOrderDetails } from '../../context/orderDetailsProvider';
import formatDate from '../../utils/formatDate';

export default function OrderDetails() {
  const { sale, seller, products } = useOrderDetails();

  return (
    <main className={ styles.container }>
      <section className={ styles.orderDetails }>
        <h3>
          <span>Pedido:</span>
          {' '}
          <span>{sale.id}</span>
        </h3>
        <div>
          <span>Vendedor:</span>
          {' '}
          <span>{seller.name}</span>
        </div>
        <span>{sale.saleDate ? formatDate(sale.saleDate) : null}</span>
        <span>{sale.status}</span>
        <button type="button">marcar como entregue</button>
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
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.SaleProduct.quantity}</td>
              <td>
                <span>R$</span>
                {' '}
                <span>
                  {product.price}
                </span>
              </td>
              <td>
                <span>R$</span>
                {' '}
                <span>{(product.price * product.SaleProduct.quantity).toFixed(2)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

OrderDetails.propTypes = {
  saleData: PropTypes.object,
}.isRequired;
