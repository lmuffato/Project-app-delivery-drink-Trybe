import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuCostumer from '../../components/MenuCustomer';
import api from '../../services/api';

import './style.css';

function OrderDetails() {
  const [sale, setSale] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const fetchSale = async () => {
      const saleFetched = await api.getSaleById(id, token);

      setSale(saleFetched);
    };

    fetchSale();
  }, [id]);

  console.log(sale);

  return (
    <section className="ordersPage">
      <MenuCostumer />
      <div className="saleDetailsContainer">
        Teste dos detalhes
      </div>
    </section>
  );
}

export default OrderDetails;
