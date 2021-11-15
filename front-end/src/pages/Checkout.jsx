import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/User/userContext';
import Header from '../Components/Header';
import Table from '../Components/Table';

const HEADERS = ['Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

// Adaptar essas urls conforma a aplicação for implementada
const links = [
  {
    name: 'PRODUTOS',
    url: '/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    name: 'MEUS PEDIDOS',
    url: '/orders',
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

function Checkout() {
  const { cart, setCart } = useContext(UserContext);
  const CART_ITEMS = formatList(cart);

  const removeItem = (name) => {
    const newItems = cart.filter((item) => item.name !== name);
    setCart(newItems);
  };

  return (
    <>
      <Header links={ links } />
      <div>
        Finalizar Pedido
        <Table
          headers={ HEADERS }
          payload={ CART_ITEMS }
          hasButton
          onClick={ removeItem }
          testeId="element-order-table-name-"
        />
        <div data-testid="customer_checkout__element-order-total-price">
          Total R$
          {' '}
          {
            calculeTotal(CART_ITEMS)
          }
        </div>
      </div>
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
      <Link to="/">
        <button type="button" data-testeid="customer_checkout__button-submit-order">
          FINALIZAR PEDIDO
        </button>
      </Link>
    </>
  );
}

export default Checkout;
