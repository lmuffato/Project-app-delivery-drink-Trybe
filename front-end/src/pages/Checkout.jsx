import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../Contexts/User/userContext';
import Header from '../Components/Header';
import Table from '../Components/Table';

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
const calculeSubTotalPrice = ({ quantity, price, name }) => ({
  name,
  quantity,
  price,
  total: quantity * price,
});

const calculeTotal = (cart) => cart.reduce((acc, cur) => {
  acc += cur.total;
  return acc;
}, 0);

const formatList = (cart) => cart.map((item) => calculeSubTotalPrice(item));

const createSalePayload = (userId, Sellers) => {
  const street = document.querySelector('#adress').value;
  const number = document.querySelector('#number').value;
  const seller = document.querySelector('#seller').value;
  const total = document.querySelector('#total').innerText;

  const sellerId = Sellers.find(({ name }) => name === seller);

  return {
    street,
    number,
    sellerId,
    userId,
    total,
    status: 'Pendente',
  };
};

function Checkout() {
  const { cart, setCart } = useContext(UserContext);
  const [sellers, setSellerts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const CART_ITEMS = formatList(cart);

  const removeItem = (name) => {
    const newItems = cart.filter((item) => item.name !== name);
    setCart(newItems);
  };

  useEffect(() => {
    const getSellers = async () => {
      setIsLoading(true);
      const { data } = await axios.get('/users?role=seller');
      setSellerts(data);
      setIsLoading(false);
    };

    getSellers();
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
          {calculeTotal(CART_ITEMS)}
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
            const payload = createSalePayload(user.id, sellers);

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
