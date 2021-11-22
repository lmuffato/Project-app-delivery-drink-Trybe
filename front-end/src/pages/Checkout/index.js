/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/User/userContext';
import DeliveryContext from '../../Contexts/Deliveries/DeliveryContext';
import Header from '../../Components/Header';
import Table from '../../Components/Table';

import { getSellers } from '../../utils/Data';
import {
  calculeTotal,
  formatList,
  createSalePayload,
  createUserCart,
} from './helpers';

const TOKEN = localStorage.getItem('token');

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

function Checkout() {
  const { cart, setCart, user } = useContext(UserContext);
  const { products, quantityProducts } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const CART_ITEMS = formatList(cart);

  const history = useHistory();

  const removeItem = (name) => {
    const newItems = cart.filter((item) => item.name !== name);
    setCart(newItems);
  };

  useEffect(() => {
    const onMount = async () => {
      setIsLoading(true);
      setCart(createUserCart(products, quantityProducts));
      const { result } = await getSellers();
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
          { `${Number(calculeTotal(CART_ITEMS)).toFixed(2)}`.replace('.', ',') }
        </div>
      </div>
      {!isLoading && (
        <form>
          <label htmlFor="seller">
            Vendedor Responsável
            <select id="seller" data-testid="customer_checkout__select-seller">
              { sellers.map((seller, i) => (
                <option
                  value={ seller.name }
                  key={ `seller${i}` }
                >
                  { seller.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="adress">
            Endereço
            <input
              type="text"
              required
              id="adress"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="number"
              required
              id="number"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </form>
      )}
      <Link to="/">
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ async () => {
            const payload = createSalePayload(user.id, sellers, cart);

            const { data: { result: { id } } } = await axios.post(
              'http://localhost:3001/sales',
              payload, { headers: { authorization: TOKEN },
              },
            );

            setCart([]);

            return history.push(`/customer/orders/${id}`);
          } }
        >
          FINALIZAR PEDIDO
        </button>
      </Link>
    </>
  );
}

export default Checkout;
