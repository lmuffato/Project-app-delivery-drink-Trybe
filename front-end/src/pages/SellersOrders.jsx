import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getAllOrdersBySellerId } from '../services/endpointsAPI';

import userContext from '../context/userContext';

import Navbar from '../Components/NavBarSellers';

import '../Styles/SellerOrders.css';

const dataTestid48 = 'seller_orders__element-order-id';
const dataTestid49 = 'seller_orders__element-delivery-status';
const dataTestid50 = 'seller_orders__element-order-date';
const dataTestid51 = 'seller_orders__element-card-price';
const dataTestid52 = 'seller_orders__element-card-address';

export default function SellersOrders() {
  const { userData } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;
  const numberTen = 10;

  const convertDateFormat = (date) => {
    const numberEight = 8;
    const numberFive = 5;
    const numberFour = 4;
    const day = date.substr(numberEight, 2);
    const month = date.substr(numberFive, 2);
    const year = date.substr(0, numberFour);
    return `${day}/${month}/${year}`;
  };

  const putComma = (value) => value.toString().replace('.', ',');

  const selectStatusCss = (status) => {
    if (status === 'Pendente') return 'ordem-pendente';
    if (status === 'Preparando') return 'ordem-preparando';
    return 'ordem-entregue';
  };

  const renderTags = (sale, index) => (
    <div key={ index }>
      <Link to={ `/seller/orders/${sale.id} ` } className="link">
        <div className="unit-card-container">
          <div data-testid={ `${dataTestid48}--${sale.id}` } className="order-number">
            <div className="pedido">Pedido</div>
            <div className="pedido">
              { sale.id < numberTen ? `000${sale.id}` : `00${sale.id}` }
            </div>
          </div>
          <div className="rigth-side">
            <div className="upper-side">
              <div
                data-testid={ `${dataTestid49}--${sale.id}` }
                className="status-container"
              >
                <div className={ selectStatusCss(sale.status) }>
                  { sale.status.toUpperCase() }
                </div>
              </div>
              <div className="date-price-container">
                <div data-testid={ `${dataTestid50}--${sale.id}` } className="order-date">
                  { convertDateFormat(sale.saleDate) }
                </div>
                <div data-testid={ `${dataTestid51}--${sale.id}` } className="order-total">
                  R$
                  { ' ' }
                  { putComma(sale.totalPrice) }
                </div>
              </div>
            </div>
            <div className="lower-side">
              <div className="address-container">
                <div data-testid={ `${dataTestid52}--${sale.id}` } className="order-address">
                  { `End.: ${sale.deliveryAddress}, ${sale.deliveryNumber}` }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  useEffect(() => {
    setIsLoading(true);
    const { token } = userData;
    getAllOrdersBySellerId(token, userData.id)
      .then((resp) => {
        setOrders(resp);
        setIsLoading(false);
      });
  }, [userData]);

  return (
    <div className="container">
      <Navbar />
      <section className="cards-container">
        {
          isLoading
            ? loadingTag
            : orders.map((e, index) => renderTags(e, index))
        }
      </section>
    </div>
  );
}
