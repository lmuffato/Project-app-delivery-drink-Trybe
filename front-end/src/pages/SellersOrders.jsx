import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getSales } from '../services/endpointsAPI';

import Navbar from '../Components/NavBar';

const dataTestid48 = 'seller_orders__element-order-id';
const dataTestid49 = ' seller_orders__element-delivery-status';
const dataTestid50 = ' seller_orders__element-order-date';
const dataTestid51 = ' seller_orders__element-card-price';
const dataTestid52 = 'seller_orders__element-card-address';

export default function SellersOrders() {
  // const { userData } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;

  const renderTags = (sale, index) => (
    <Link to={ `/sellers/orders/${sale.id} ` }>
      <div key={ index }>
        <div className="cardContainer">
          <div data-testid={ `${dataTestid48}-${sale.id}` } className="pedido">
            { sale.id }
          </div>
          <div data-testid={ `${dataTestid49}-${sale.id}` } className="status">
            { sale.status }
          </div>
          <div data-testid={ `${dataTestid50}-${sale.id}` } className="moment">
            { sale.saleDate }
          </div>
          <div data-testid={ `${dataTestid51}-${sale.id}` } className='total-price'>
            { sale.totalPrice }
          </div>
          <div data-testid={ `${dataTestid52}-${sale.id}` } className='adress'>
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </div>
        </div>
      </div>
    </Link>
  );

  useEffect(() => {
    setIsLoading(true);
    getSales().then((resp) => setOrders(resp),
      setIsLoading(false)
    );
  }, []);

  return (
    <div>
      { console.log(orders) }
      <Navbar />
      {
        isLoading
          ? loadingTag
          : orders.map((e, index) => renderTags(e, index))
      }
    </div>
  );
}
