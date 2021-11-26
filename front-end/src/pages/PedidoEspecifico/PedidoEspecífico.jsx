/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import { getSaleById } from '../../API/dataBaseCall';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';
import DetalhesPedido from './PedidoEspecificoElements';

export default function PedidoEspecífico({ location }) {
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
  const delivery = 'customer_order_details__element-order-details-label-delivery-status';
  const orderDate = 'customer_order_details__element-order-details-label-order-date';
  const Seller = 'customer_order_details__element-order-details-label-seller-name';
  const orderId = 'customer_order_details__element-order-details-label-order-id';

  async function requestAPI() {
    const result = await getSaleById(userName.token, saleID);
    setProducts(result.products);
    setSale(result);
    setLoading(false);
  }
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
  function handeCheck() {
    setSale({ ...sale, status: 'Entregue' });
  }
  if (loading) return <p>Loading...</p>;
  return (
    <DetalhesPedido>
      <div>
        <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
        <h1>Detalhe do Pedido</h1>
        {products
          && products.map((product, index) => (
            <CheckoutProduct
              key={ index }
              index={ index }
              id={ product.id }
              name={ product.name }
              qtd={ product.quantity }
              price={ product.price }
            />
          ))}
        <h3>
          Total: R$
          <span>
            {total}

          </span>
        </h3>

        <p data-testid={ orderId }>
          {sale.id}
        </p>
        <p data-testid={ Seller }>
          {sale.sellerName}
        </p>
        <p data-testid={ orderDate }>
          {date}
        </p>

        <h4
          data-testid={ delivery }
        >
          {sale.status}
        </h4>

        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ handeCheck }
          disabled
        >
          Marcar como entregue
        </button>
      </div>
    </DetalhesPedido>
  );
}

PedidoEspecífico.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
