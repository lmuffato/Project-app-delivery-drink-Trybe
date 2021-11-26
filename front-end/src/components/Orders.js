import axios from 'axios';
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import OrderCard from './OrderCard';
import { saveSale } from '../redux/slices/saleSlice';

const { useSelector, useDispatch } = require('react-redux');

export default function Orders() {
  const { role, id } = useSelector((state) => state.user);
  const { sales } = useSelector((state) => state.sale);
  const dispatch = useDispatch();
  const reqUrl = role === 'customer' ? `http://localhost:3001/users/${id}/sales` : `http://localhost:3001/sellers/${id}/sales`;
  useEffect(() => {
    axios.get(reqUrl)
      .then((res) => {
        dispatch(saveSale(res.data));
      });
  }, [dispatch, reqUrl]);
  console.log('usuario aqui', role);
  return (
    <div>
      <NavBar />
      { sales.map((sale) => (
        <OrderCard
          key={ sale.id }
          sale={ sale }
        />
      ))}
    </div>
  );
}
