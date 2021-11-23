import React from 'react';
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
  } = props;

  const tesStatus = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <div className="order-detail-container">

      <div className="order-info">
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`Pedido ${id}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${seller.name}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {moment(saleDate).format('DD/MM/yyyy')}
        </p>
        <p
          className={ `order-status-${status}` }
          data-testid={ tesStatus }
        >
          {status.toUpperCase()}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
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
          { products.map((product) => {
            const { quantity } = product.quantityTotal;
            const subTotalValue = (quantity * Number(product.price)).toFixed(2);

            return (
              <tr key={ product.id }>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ quantity }</td>
                <td>{ product.price }</td>
                <td>{ subTotalValue }</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="customer-order-total-price">{`Total: ${totalPrice}`}</div>
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
