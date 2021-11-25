import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useSellerOrderDetails } from '../../context/sellerOrderDetailsProvider';
import formatDate from '../../utils/formatDate';
import replaceDotToComma from '../../services/productPages/replaceDotToComa';

export default function SellerOrderDetails({ dataTestIds }) {
  const [disabledButton, setDisableButton] = useState(false);
  const { sale, products } = useSellerOrderDetails();

  useEffect(() => {
    const status = ['pendente', 'Pendente'];

    if (!status.includes(sale.status) && sale.status) {
      setDisableButton(true);
    }
  }, [sale.status]);

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

        <span data-testid={ dataTestIds['55'] }>
          {sale.status}
        </span>

        <button
          disabled={ disabledButton }
          data-testid={ dataTestIds['57'] }
          type="button"
        >
          PREPARAR PEDIDO
        </button>

        <button
          disabled
          data-testid={ dataTestIds['58'] }
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
