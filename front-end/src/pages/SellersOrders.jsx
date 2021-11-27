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

  const renderTags = (sale, index) => (
    <div key={ index } className="unit-card-container">
      <Link to={ `/seller/orders/${sale.id} ` } className="link">
        <div className="card">
          <div data-testid={ `${dataTestid48}--${sale.id}` } className="">
            Pedido
            { sale.id }
          </div>
          <div data-testid={ `${dataTestid49}--${sale.id}` } className="">
            { sale.status }
          </div>
          <div data-testid={ `${dataTestid50}--${sale.id}` } className="">
            { sale.saleDate }
          </div>
          <div data-testid={ `${dataTestid51}--${sale.id}` } className="">
            R$
            { sale.totalPrice }
          </div>
          <div data-testid={ `${dataTestid52}--${sale.id}` } className="">
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </div>
        </div>
      </Link>
    </div>
  );

  const getOrdersBySeller = async () => {
    const { token } = userData;
    const myOrders = await getAllOrdersBySellerId(token, userData.id);
    console.log(myOrders);
    setOrders(myOrders);
  };

  useEffect(() => {
    setIsLoading(true);
    getOrdersBySeller();
    setIsLoading(false);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <section className="card-container">
        {
          isLoading
            ? loadingTag
            : orders.map((e, index) => renderTags(e, index))
        }
      </section>
    </div>
  );
}
