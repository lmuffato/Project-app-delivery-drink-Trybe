/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../Contexts/User/userContext';
import DeliveryContext from '../Contexts/Deliveries/DeliveryContext';
import Header from '../Components/Header';
import Table from '../Components/Table';

import { getSellers } from '../utils/Data';

const HEADERS = ['Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

const LINK = [
  {
    name: 'PRODUTOS',
    url: '/customer/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    name: 'MEUS PEDIDOS',
    url: '/customer/orders',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

// Helpers
const calculeSubTotal = ({ quantity, price, name }) => ({
  name,
  quantity,
  price,
  total: quantity * Number(price),
});

const calculeTotal = (cart) => cart.reduce((acc, cur) => {
  acc += cur.total;
  return acc;
}, 0);

const formatList = (cart) => cart.map((item) => calculeSubTotal(item));

const createSalePayload = (userId, Sellers, cart) => {
  const deliveryAddress = document.querySelector('#adress').value;
  const deliveryNumber = document.querySelector('#number').value;
  const seller = document.querySelector('#seller').value;
  const totalPrice = document.querySelector('#total').innerText;

  const sellerId = Sellers.find(({ name }) => name === seller);

  return {
    deliveryAddress,
    deliveryNumber,
    sellerId,
    userId,
    totalPrice,
    status: 'Pendente',
    orders: cart,
  };
};

const createUserCart = (products, quantities) => (
  products.reduce((acc, cur) => (
    quantities[cur.id] > 0
      ? [...acc, { ...cur, quantity: quantities[cur.id].toFixed(2) }]
      : [...acc]
  ), [])
);

function Checkout() {
  const { cart, setCart } = useContext(UserContext);
  const { products, quantityProducts } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const CART_ITEMS = formatList(cart);

  const removeItem = (name) => {
    const newItems = cart.filter((item) => item.name !== name);
    setCart(newItems);
  };

  useEffect(() => {
    const onMount = async () => {
      setIsLoading(true);
      setCart(createUserCart(products, quantityProducts));
      const result = await getSellers();
      setSellers(result);
      setIsLoading(false);
    };

    onMount();
  }, []);

  return (
    <>
      <Header links={ LINK } />
      <div>
        Finalizar Pedido
        <Table
          headers={ HEADERS }
          payload={ CART_ITEMS }
          hasButton
          onClick={ removeItem }
          testeId="element-order-table-name-"
        />
        <div data-testid="customer_checkout__element-order-total-price" id="total">
          { calculeTotal(CART_ITEMS).toFixed(2) }
        </div>
      </div>
      {!isLoading && (
        <form>
          <label htmlFor="seller">
            Vendedor Responsável
            <select id="seller" data-testeid="customer_checkout__select-seller">
              <option value="">Fulano</option>
            </select>
          </label>
          <label htmlFor="adress">
            Endereço
            <input
              type="text"
              required
              id="adress"
              data-testeid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="number"
              required
              id="number"
              data-testeid="customer_checkout__input-addressNumber"
            />
          </label>
        </form>
      )}
      <Link to="/">
        <button
          type="button"
          data-testeid="customer_checkout__button-submit-order"
          onClick={ async () => {
            const payload = createSalePayload(user.id, sellers, cart);

            const { data: id } = await axios.post(
              '/sales',
              payload, { headers: { Authorization: user.token },
              },
            );

            setCart([]);

            return <Redirect to={ `/customer/orders/${id}` } />;
          } }
        >
          FINALIZAR PEDIDO
        </button>
      </Link>
    </>
  );
}

export default Checkout;
