import React from 'react';
import { useLocation, useParams } from 'react-router';
import NavBar from '../components/NavBar';
import { formatDate, formatPrice,
  getTestID, formatTestID, leftPad } from '../utils/functions';
// TODO: Trocar mock por requisição de dados no back
const mock = {
  id: 4,
  saleDate: '2021-11-25T02:20:56.000Z',
  status: 'Pendente',
  totalPrice: 23.80,
  products: [
    {
      description: 'Skol Lata 250ml',
      quantity: 4,
      unitaryValue: 2.20,
      subTotal: 8.80,
    },
    {
      description: 'Heineken 600ml',
      quantity: 2,
      unitaryValue: 7.50,
      subTotal: 15.00,
    },
  ] };
export default function SellerOrders() {
  const { id } = useParams();
  const location = useLocation();
  const renderNavBar = () => {
    if (location.pathname !== 'login' && location.pathname !== 'register') {
      return (<NavBar />);
    }
  };
  return (
    <>
      { renderNavBar() }
      <div className="card-top-bar">
        <div data-testid={ getTestID('54') }>{`Pedido ${leftPad(id)}`}</div>
        <div data-testid={ getTestID('56') }>{formatDate(mock.saleDate)}</div>
        <div data-testid={ getTestID('55') }>{mock.status}</div>
        <button data-testid={ getTestID('57') } type="button">PREPARAR PEDIDO</button>
        <button data-testid={ getTestID('58') } type="button">SAIU PARA ENTREGA</button>
      </div>
      <div className="card-list">
        <ul>
          {mock
            .products
            .map(({ description, quantity, unitaryValue, subTotal }, index) => (
              <li key={ index }>
                <div data-testid={ formatTestID('59', index) }>{index}</div>
                <div data-testid={ formatTestID('60', index) }>{description}</div>
                <div data-testid={ formatTestID('61', index) }>{quantity}</div>
                <div data-testid={ formatTestID('62', index) }>
                  {formatPrice(unitaryValue)}
                </div>
                <div data-testid={ formatTestID('63', index) }>
                  {formatPrice(subTotal)}
                </div>
              </li>
            ))}
        </ul>
        <div data-testid={ getTestID('64') }>{formatPrice(mock.totalPrice)}</div>
      </div>
    </>
  );
}
