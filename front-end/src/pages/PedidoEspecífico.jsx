/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { getSaleById } from '../API/dataBaseCall';
import CheckoutProduct from '../components/checkoutProduct/checkoutProduct';

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

  async function requestAPI() {
    const result = await getSaleById(userName.token, saleID);
    setProducts(result.products);
    setSale(result);
    setLoading(false);
  }
  console.log(products);
  useEffect(() => requestAPI(), [requestAPI]);
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
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          {total}

        </span>
      </h3>

      <p data-testid="customer_order_details__element-order-details-label-order-id">
        {sale.id}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        {sale.sellerName}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        {date}
      </p>

      <h4
        data-testid="customer_order_details__element-order-details-label-delivery-status"
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
  );
}

PedidoEspecífico.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
