import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { getSaleById } from '../API/dataBaseCall';
import CheckoutProduct from '../components/checkoutProduct/checkoutProduct';

export default function VendaEspecífica({ location }) {
  const user = localStorage.getItem('user');
  const userName = JSON.parse(user);
  const path = location.pathname;
  const split = path.split('orders/')[1];
  const saleID = parseInt(split, 10);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState();
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  async function requestAPI() {
    const result = await getSaleById(userName.token, saleID);
    setProducts(result.products);
    setSale(result);
    setLoading(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => requestAPI(), []);
  useEffect(() => {
    if (products) {
      const result = products.reduce(
        (curr, next) => curr + next.price * next.quantity,
        0,
      );
      const toFixed = result.toFixed(2);
      const toString = toFixed.toString().replace(/\./g, ',');
      setTotal(toString);
    }
  }, [products]);

  useEffect(() => {
    if (sale) setDate(new Date(sale.sale_date).toLocaleDateString('pt-br'));
  }, [sale]);
  function handleOutForDelivery() {
    setSale({ ...sale, status: 'Em Trânsito' });
  }
  function preparingOrder() {
    setSale({ ...sale, status: 'Preparando' });
  }
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Pedido Específico</h1>
      {products
        && products.map((product, index) => (
          <CheckoutProduct
            key={ index }
            index={ index }
            id={ product.id }
            name={ product.name }
            qtd={ product.quantity }
            price={ product.price }
            dataTestID1="seller_order_details__element-order-table-item-number-"
            dataTestID2="seller_order_details__element-order-table-name-"
            dataTestID3="seller_order_details__element-order-table-quantity-"
            dataTestID4="seller_order_details__element-order-table-unit-price-<index>"
            dataTestID5="seller_order_details__element-order-table-sub-total-<index>"
          />
        ))}
      <h3
        style={ {
          textAlign: 'center',
          fontSize: '2em',
          marginRight: '190px',
          marginTop: '50px',
          paddingTop: '15px',
          backgroundColor: 'hsl(0 0% 20%)',
          color: 'white',
          width: '250px',
          height: '60px',
          position: 'relative',
          float: 'right',
          borderRadius: '5px',
        } }
      >
        Total: R$
        <span data-testid="seller_order_details__element-order-total-price">
          {total}

        </span>
      </h3>

      <p data-testid="seller_order_details__element-order-details-label-order-id">
        {sale.id}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-order-date">
        {date}
      </p>

      <h4
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </h4>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ handleOutForDelivery }
      >
        Saiu para Entrega
      </button>
      <button
        type="button"
        onClick={ preparingOrder }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido
      </button>
    </div>
  );
}

VendaEspecífica.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
