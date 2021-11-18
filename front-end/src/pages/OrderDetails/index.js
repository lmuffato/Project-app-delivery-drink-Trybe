import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuCostumer from '../../components/MenuCustomer';
import api from '../../services/api';

import './style.css';

function OrderDetails() {
  const [sale, setSale] = useState({});
  const { id: idOrder } = useParams();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const fetchSale = async () => {
      const saleFetched = await api.getSaleById(idOrder, token);

      setSale(saleFetched);
    };

    fetchSale();
  }, [idOrder]);

  console.log(sale);

  const { id, status, sale_date: saleDate, total_price: totalPrice } = sale;

  return (
    <section className="orderDetailsPage">
      <MenuCostumer />
      <div className="saleDetailsContainer">
        <div>
          Detalhe do Pedido
          <div className="order-detail-container">

            <div className="order-info">
              <p>{`Pedido ${id}`}</p>
              <p>{saleDate.split('T')[0]}</p>
              <div>{status.toUpperCase()}</div>
            </div>

            <div>{totalPrice}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;
